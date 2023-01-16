package com.webdeveloperbierzo.purpose23.controller;

import com.webdeveloperbierzo.purpose23.entity.Purpose;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.*;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PurposeControllerTest {

    private TestRestTemplate testRestTemplate;
    @Autowired
    private RestTemplateBuilder restTemplateBuilder;

    @LocalServerPort
    private int port;
    @BeforeEach
    void setUp(){
        restTemplateBuilder = restTemplateBuilder.rootUri("http://localhost:" + port);
        testRestTemplate = new TestRestTemplate(restTemplateBuilder);
    }
    @DisplayName("Comprobar hola mundo desde controladores Spring Rest")
    @Test
    void holaMundo() {
        ResponseEntity<String> response = testRestTemplate.getForEntity("/hola", String.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(200,response.getStatusCode().value());
        assertEquals("Hola mundo", response.getBody());
    }

    @Test
    void findAll() {
        ResponseEntity<Purpose[]> response = testRestTemplate.getForEntity("/api/v1/purposes", Purpose[].class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(200,response.getStatusCode().value());

        List<Purpose> purpose = Arrays.asList(response.getBody());
        System.out.println(purpose.size());

    }



    @Test
    void create() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

        String json = """
                {
                     "category": "Salud",
                     "purposeName": "Ir al gimnasio",
                     "purposeWhat": "Cada segundo dia",
                     "dateStar": "2023-01-30",
                     "dateEnd": "2023-12-31"
                }
                """;
        HttpEntity<String> request = new HttpEntity<>(json, headers);
        ResponseEntity<Purpose> response = testRestTemplate.exchange("/api/v1/purposes", HttpMethod.POST, request, Purpose.class);
        Purpose result = response.getBody();
        assertEquals(1L, result.getId());
        assertEquals("Ir al gimnasio", result.getPurposeName());
    }
    @Test
    void findById() {
        ResponseEntity<Purpose> response = testRestTemplate.getForEntity("/api/v1/purposes/2", Purpose.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void update() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

        String json = """
                {
                     "id": 1,
                     "category": "Salud ",
                     "purposeName": "Ir al gimnasio Update",
                     "purposeWhat": "Cada segundo dia",
                     "dateStar": "2023-01-30",
                     "dateEnd": "2023-12-31"
                }
                """;
        HttpEntity<String> request = new HttpEntity<>(json, headers);
        ResponseEntity<Purpose> response = testRestTemplate.exchange("/api/v1/purposes", HttpMethod.PUT, request, Purpose.class);
        Purpose result = response.getBody();
        assertEquals(1L, result.getId());
        assertEquals("Ir al gimnasio Update", result.getPurposeName());
    }

//    @Test
//    void delete() {
//    }
//
//    @Test
//    void deleteAll() {
//    }
}