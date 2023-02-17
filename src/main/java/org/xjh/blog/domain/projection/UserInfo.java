package org.xjh.blog.domain.projection;

import java.util.Set;

/**
 * A Projection for the {@link org.xjh.blog.domain.entity.User} entity
 */
public interface UserInfo {
    String getEmail();

    Set<UserRoleInfo> getUserRoles();
}