package org.xjh.blog.domain.dto;

import java.io.Serializable;

/**
 * A DTO for the {@link org.xjh.blog.domain.entity.User} entity
 */
public record UserDto(String password, String email, String userName) implements Serializable {
}