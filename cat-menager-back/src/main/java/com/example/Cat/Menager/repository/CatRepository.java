package com.example.Cat.Menager.repository;

import com.example.Cat.Menager.model.CatModel;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.*;

public interface CatRepository extends JpaRepository <CatModel, Long>{
   CatModel findById(long id);
   CatModel deleteById(long id);
   CatModel findByname(String name);
   CatModel deleteByName(String name);
}
