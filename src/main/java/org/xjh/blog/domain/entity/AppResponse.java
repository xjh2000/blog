package org.xjh.blog.domain.entity;

import lombok.*;
import org.springframework.http.HttpStatus;

import java.io.Serializable;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AppResponse implements Serializable {

    /**
     * operation is success
     */
    private Boolean success;

    /**
     * detail message
     */
    private String msg;

    /**
     * data content
     */
    private Object data;

    public static AppResponse ofSuccess() {
        return AppResponse.builder()
                .success(true)
                .msg(HttpStatus.OK.getReasonPhrase())
                .build();
    }

    public static AppResponse ofSuccess(Object data) {
        return AppResponse.builder()
                .success(true)
                .msg("all the thing is ok")
                .data(data)
                .build();
    }

    public static AppResponse ofSuccess(String message) {
        return AppResponse.builder()
                .success(true)
                .msg(message)
                .build();
    }

    public static AppResponse ofSuccess(String message, Object data) {
        return AppResponse.builder()
                .success(true)
                .msg(message)
                .data(data)
                .build();
    }

    public static AppResponse ofFail(String message) {
        return AppResponse.builder()
                .success(false)
                .msg(message)
                .build();
    }

    public static AppResponse ofFail(String message, Object data) {
        return AppResponse.builder()
                .success(false)
                .msg(message)
                .data(data)
                .build();
    }

    public static AppResponse ofFail(Object data) {
        return AppResponse.builder()
                .success(false)
                .msg("more detail see the data")
                .data(data)
                .build();
    }

}