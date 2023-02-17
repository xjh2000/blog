package org.xjh.blog.service;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.xjh.blog.domain.dto.UserDto;
import org.xjh.blog.domain.entity.User;
import org.xjh.blog.domain.entity.UserRole;
import org.xjh.blog.domain.mapper.UserMapperImpl;
import org.xjh.blog.domain.projection.UserInfo;
import org.xjh.blog.exception.AppException;
import org.xjh.blog.repository.UserRepository;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    private final UserMapperImpl userMapper;

    public UserService(UserRepository userRepository, UserMapperImpl userMapper) {
        this.userRepository = userRepository;

        this.userMapper = userMapper;
    }

    public List<UserInfo> getAll() {

        return userRepository.findByIdNotNull(PageRequest.of(0, 20));
    }


    public void register(UserDto userDto) {
        Optional<User> userInfo = userRepository.findByUserName(userDto.userName());

        if (userInfo.isPresent()) {
            throw new AppException("the email had been register");
        }

        User user = userMapper.toEntity(userDto);

        userRepository.save(user);


        Optional<User> userInfo1 = userRepository.findByUserName(userDto.userName());

        HashSet<UserRole> userRoles = new HashSet<>();
        UserRole role = new UserRole();
        role.setRoleName("admin");
        role.setId(userInfo1.orElseThrow().getId());
        userRoles.add(role);
        user.setUserRoles(userRoles);

        userRepository.updateUserRolesByUserName(role, user.getUserName());
    }
}
