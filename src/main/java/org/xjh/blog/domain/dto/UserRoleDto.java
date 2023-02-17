package org.xjh.blog.domain.dto;

import java.io.Serializable;

/**
 * A DTO for the {@link org.xjh.blog.domain.entity.UserRole} entity
 */
public record UserRoleDto(String roleName) implements Serializable {
}