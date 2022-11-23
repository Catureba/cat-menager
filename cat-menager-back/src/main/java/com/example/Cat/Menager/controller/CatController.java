package com.example.Cat.Menager.controller;

import com.example.Cat.Menager.model.CatModel;
import com.example.Cat.Menager.repository.CatRepository;
import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(exposedHeaders = "erros, content-type") //Resolvendo CrossOrigin definindo que qualquer front end pode fazer a request
@RequestMapping("/api")
public class CatController {
    @Autowired
    CatRepository  catRepository;

    //Definindo o GetMappgin pra poder pesquisar o gato pelo id
    @GetMapping("/get/id/{id}")
    public CatModel findCatByID(@PathVariable long id){
        return catRepository.findById(id);
    }

    //Definindo o GetMappgin pra poder pesquisar o gato pelo nome
    @GetMapping("/get/name/{name}")
    public CatModel findCatByName(@PathVariable String name){
        return catRepository.findByname(name);
    }

    //Definindo o GetMappgin pra poder pesquisar todos os gatos de vez
    @GetMapping("/list")
    public List<CatModel> listAllCats(){
        return catRepository.findAll();
    }

    //Definindo o PostMappgin pra poder postar um gato
    @PostMapping("/post")
    public CatModel postCat(@RequestBody CatModel catModel){
        return catRepository.save(catModel);
    }

    //Definindo o DeleteMappgin pra poder deletar o gato pelo id
    @DeleteMapping("/delete/id/{id}")
    public CatModel deleteCatById(@PathVariable long id){
        return catRepository.deleteById(id);
    }

//    //Definindo o DeleteMappgin pra poder deletar o gato pelo nome
//    @DeleteMapping("/delete/name/{name}")
//    public CatModel deleteCatByName(@PathVariable String name){
//        return catRepository.deleteByName(name);
//    }

    //Definindo o PutMappgin pra poder editar um gato
    @PutMapping("/put/")
    public CatModel editCat(@RequestBody CatModel catModel){
        return catRepository.save(catModel);
    }

}
