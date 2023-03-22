package com.example.demo.entity;

public class Job {
    private int userId;
    private String occTitle;
    private String aPct10;
    private String aMean;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getOccTitle() {
        return occTitle;
    }

    public void setOccTitle(String userDate) {
        this.occTitle = userDate;
    }

    public String getAPct10() {
        return aPct10;
    }

    public void setAPct10(String aPct10) {
        this.aPct10 = aPct10;
    }

    public String getAMean() {
        return aMean;
    }

    public void setAMean(String aMean) {
        this.aMean = aMean;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", occTitle=" + occTitle +
                ", aPct10='" + aPct10 + '\'' +
                ", aMean='" + aMean + '\'' +
                '}';
    }
}
