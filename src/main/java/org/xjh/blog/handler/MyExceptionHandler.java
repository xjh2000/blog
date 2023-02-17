package org.xjh.blog.handler;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.xjh.blog.domain.entity.AppResponse;
import org.xjh.blog.exception.AppException;

@Slf4j
@ControllerAdvice
public class MyExceptionHandler {

    @ExceptionHandler(AppException.class)
    @ResponseBody
    public AppResponse appExceptionHandler(HttpServletRequest req, AppException e) {
//        log.error(e.getMessage());
        return AppResponse.ofFail(e.getMessage());
    }


}
