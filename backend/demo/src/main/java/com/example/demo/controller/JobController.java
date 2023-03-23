package com.example.demo.controller;

import com.example.demo.entity.Job;
import com.example.demo.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JobController {

    @Autowired
    private JobService jobService;
//
//    @RequestMapping(value = "/delete", method = RequestMethod.POST)
//    public Integer delete(Integer userId) {
//        System.out.println(userId);
//        int result = userService.delete(userId);
//        return result;
//    }
//
//    @RequestMapping(value = "/update", method = RequestMethod.POST)
//    @ResponseBody
//    public String update(User user) {
//        int result = userService.Update(user);
//        if (result >= 1) {
//            return "success";
//        } else {
//            return "fail";
//        }
//    }
//
//    @RequestMapping(value = "/insert", method = RequestMethod.POST)
//    public User insert(User user) {
//        return userService.insertUser(user);
//    }

    @RequestMapping("/ListAll")
    @ResponseBody
    public List<Job> ListAll() {
        return jobService.ListAll();
    }

    @RequestMapping("/ListByName")
    @ResponseBody
    public List<Job> ListJobByName(String occTitle) {
        return jobService.findByName(occTitle);
    }

    @RequestMapping(value="/page")
    @ResponseBody
    public List<Job> page(Integer page){
        int pageNow = page == null ? 1 : page;
        int pageSize = 1000;
        int startRows = pageSize*(pageNow-1);
        List<Job> list = jobService.queryPage(startRows);
        return list;
    }

    @RequestMapping(value="/rows")
    @ResponseBody
    public int rows(){
        return jobService.getRowCount();
    }
}
