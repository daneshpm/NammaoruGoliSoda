package com.GoliSoda.Service;
import java.util.*;
import com.GoliSoda.Entity.*;
import com.GoliSoda.Repository.*;
import com.GoliSoda.DTO.*;
import java.time.*;
import com.GoliSoda.CustomException.*;
import org.springframework.stereotype.*;
import lombok.*;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    @Override
    public Order placeOrder(OrderDTO dto) {

        Order order = new Order();

        order.setShopName(dto.getShopName());
        order.setOwnerName(dto.getOwnerName());
        order.setPhone(dto.getPhone());
        order.setLocation(dto.getLocation());
        order.setOrderedAt(LocalDateTime.now());

        List<OrderItem> orderItems = new ArrayList<>();

        for (OrderItemDTO itemDTO : dto.getItems()) {

            ProductEntity product = productRepository
                    .findById(itemDTO.getProductId())
                    .orElseThrow(() ->
                            new ResourceNotFoundException(
                                    "Product not found"));

            OrderItem item = new OrderItem();

            item.setProduct(product);
            item.setQuantity(itemDTO.getQuantity());
            item.setOrder(order);

            orderItems.add(item);
        }

        order.setItems(orderItems);

        return orderRepository.save(order);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order getOrderById(Long id) {

        return orderRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Order not found"));
    }

    @Override
    public void deleteOrder(Long id) {

        Order order = orderRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Order not found"));

        orderRepository.delete(order);
    }
}