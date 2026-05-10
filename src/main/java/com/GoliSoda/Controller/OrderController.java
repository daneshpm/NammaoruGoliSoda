package com.GoliSoda.Controller;
import org.springframework.web.bind.annotation.*;
import com.GoliSoda.Service.*;
import org.springframework.http.*;
import com.GoliSoda.Entity.*;
import java.util.*;
import lombok.*;
import com.GoliSoda.DTO.*;
import jakarta.validation.*;




@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
@CrossOrigin("*")
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<Order> placeOrder(
            @Valid @RequestBody OrderDTO dto) {

        return new ResponseEntity<>(
                orderService.placeOrder(dto),
                HttpStatus.CREATED
        );
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {

        return ResponseEntity.ok(
                orderService.getAllOrders()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                orderService.getOrderById(id)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOrder(
            @PathVariable Long id) {

        orderService.deleteOrder(id);

        return ResponseEntity.ok(
                "Order deleted successfully"
        );
    }
}