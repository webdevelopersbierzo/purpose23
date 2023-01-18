package com.webdeveloperbierzo.purpose23.controller;

import com.webdeveloperbierzo.purpose23.entity.Purpose;
import com.webdeveloperbierzo.purpose23.repository.PurposeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PurposeController {

    private PurposeRepository prepository;

    public PurposeController(PurposeRepository prepository) {
        this.prepository = prepository;
    }

    @CrossOrigin(origins = "http://localhost/5173")
    @GetMapping("/hola")
    public String holaMundo(){
        return "Hola mundo";
    }

    // CRUD Purpose entity

    // Search all Purpose
    @CrossOrigin(origins = "http://localhost/5173")
    @GetMapping("/api/v1/purposes")
    public List<Purpose> findAll(){
        return prepository.findAll();
    }

    // Search one Purpose
    @GetMapping("/api/v1/purposes/{id}")
    public ResponseEntity<Purpose> findById(@PathVariable Long id){
        Optional<Purpose> purposeOpt = prepository.findById(id);
        if(purposeOpt.isPresent()){
            return ResponseEntity.ok(purposeOpt.get());
        }else{
            return ResponseEntity.notFound().build();
        }
    }
    // Create one purpose
    @PostMapping("/api/v1/purposes")
    public ResponseEntity<Purpose> create(@RequestBody Purpose purpose){
        if(purpose.getId() !=null){
           return ResponseEntity.badRequest().build();
        }
        Purpose result = prepository.save(purpose);
        return ResponseEntity.ok(result);
    }
    // Update one purpose
    @PutMapping("/api/v1/purposes")
    public ResponseEntity<Purpose> update(@RequestBody Purpose purpose){
        if(purpose.getId() == null){
            return ResponseEntity.badRequest().build();
        }
        if(!prepository.existsById(purpose.getId())){
            return ResponseEntity.notFound().build();
        }
        Purpose result = prepository.save(purpose);
        return ResponseEntity.ok(result);

    }

    // Delete one purpose
    @DeleteMapping("/api/v1/purposes/{id}")
    public ResponseEntity<Purpose> delete(@PathVariable Long id){
        if(!prepository.existsById(id)){
            return ResponseEntity.notFound().build();
        }
        prepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Delete all purpose

    @DeleteMapping("/api/v1/purposes")
    public ResponseEntity<Purpose> deleteAll(){
        prepository.deleteAll();
        return ResponseEntity.noContent().build();
    }
}
