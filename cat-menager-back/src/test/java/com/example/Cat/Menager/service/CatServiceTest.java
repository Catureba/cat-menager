//package com.example.Cat.Menager.service;
//
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.TestConfiguration;
//import org.springframework.context.annotation.Bean;
//import org.springframework.test.context.junit4.SpringRunner;
//
//
//@RunWith(SpringRunner.class)
//public class CatServiceTest {
//
//    @TestConfiguration
//    static class catServiceTestConfiguration{
//
//        @Bean
//        public CatService catService(){
//            return new CatService();
//        }
//    }
//
//    @Autowired
//    CatService catService;
//
//    @Test
//    public void procuraPorNome(){
//        String name = "Bola de Neve";
//        String cat = catService.findByname(name);
//
//
//        Assertions.assertEquals(cat,"Bola de Neve");
//    }
//}
