package com.example.demo.service;

import com.example.demo.entity.Job;
import com.example.demo.mapper.JobMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class JobService {

    @Autowired
    private JobMapper jobMapper;

    public List<Job> findByName(String occTitle) {
        return jobMapper.findJobByName(occTitle);
    }

    public List<Job> queryPage(Integer startRows) {
        return jobMapper.queryPage(startRows);
    }

    public int getRowCount() {
        return jobMapper.getRowCount();
    }

//    public Job insertUser(Job job) {
//        jobMapper.insertUser(job);
//        return job;
//    }

    public List<Job> ListAll(){
        return jobMapper.ListAll();
    }

//    public int Update(Job job){
//        return jobMapper.Update(job);
//    }
//
//    public int delete(int userId){
//        return jobMapper.delete(userId);
//    }

}