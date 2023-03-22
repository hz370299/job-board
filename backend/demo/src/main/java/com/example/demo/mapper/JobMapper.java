package com.example.demo.mapper;

import com.example.demo.entity.Job;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface JobMapper {

    public List<Job> findUserByName(String occTitle);

    public List<Job> ListAll();

    public List<Job> queryPage(Integer startRows);

    public int getRowCount();

    public int insertUser(Job job);

    public int delete(int userId);

    public int Update(Job job);
}
