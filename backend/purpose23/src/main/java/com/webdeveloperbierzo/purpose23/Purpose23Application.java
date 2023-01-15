package com.webdeveloperbierzo.purpose23;

import com.webdeveloperbierzo.purpose23.entity.Purpose;
import com.webdeveloperbierzo.purpose23.repository.PurposeRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.time.LocalDate;

@SpringBootApplication
public class Purpose23Application {

	public static void main(String[] args) {

		ApplicationContext  context =  SpringApplication.run(Purpose23Application.class, args);
		PurposeRepository prepository = context.getBean(PurposeRepository.class);

		Purpose purpose1 = new Purpose(null,"Salud", "Ir al gimnasio", "Cada segundo dia", LocalDate.of(2023,1,30), LocalDate.of(2023,12,31));
		prepository.save(purpose1);

	}

}
