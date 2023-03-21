package com.example.demo.entity;

public class User {
    private int userId;
    private String occTiltle;
    private String aPct10;
    private String aMean;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getOccTiltle() {
        return occTiltle;
    }

    public void setOccTiltle(String userDate) {
        this.occTiltle = userDate;
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
                ", occTiltle=" + occTiltle +
                ", aPct10='" + aPct10 + '\'' +
                ", aMean='" + aMean + '\'' +
                '}';
    }
}
