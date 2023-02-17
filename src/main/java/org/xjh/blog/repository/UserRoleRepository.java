package org.xjh.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.xjh.blog.domain.entity.UserRole;

import java.util.Optional;

public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
    @Query("select u from UserRole u where u.roleName = ?1")
    Optional<UserRole> findByRoleName(String roleName);
}