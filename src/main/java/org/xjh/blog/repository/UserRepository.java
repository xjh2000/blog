package org.xjh.blog.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;
import org.springframework.transaction.annotation.Transactional;
import org.xjh.blog.domain.entity.User;
import org.xjh.blog.domain.entity.UserRole;
import org.xjh.blog.domain.projection.UserInfo;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    @Transactional
    @Modifying
    @Query("update User u set u.userRoles = ?1 where u.userName = ?2")
    int updateUserRolesByUserName(UserRole userRoles, String userName);

    @Transactional
    @Modifying
    @Query("update User u set u.password = ?1, u.email = ?2")
    int updatePasswordAndEmailBy(String password, String email);

    @Query("select u from User u where u.userName = ?1")
    Optional<User> findByUserName(String userName);


    @Query("select u from User u where u.id is not null")
    List<UserInfo> findByIdNotNull(Pageable pageable);

    @Query("select u from User u where u.email = ?1")
    Optional<UserInfo> findByEmail(@NonNull String email);

}