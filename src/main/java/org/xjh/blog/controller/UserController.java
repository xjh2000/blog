package org.xjh.blog.controller;

import org.springframework.web.bind.annotation.*;
import org.xjh.blog.domain.dto.UserDto;
import org.xjh.blog.domain.projection.UserInfo;
import org.xjh.blog.service.UserService;

import java.util.List;

@RestController
@RequestMapping("users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("all")
    public List<UserInfo> all() {
        return userService.getAll();
    }

    @PostMapping("register")
    public void register(@RequestBody UserDto userDto) {
        userService.register(userDto);
    }
}
