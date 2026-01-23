package com.klu;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringDiExampleApplication implements CommandLineRunner {

    private final ApplicationContext context;

    public SpringDiExampleApplication(ApplicationContext context) {
        this.context = context;
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringDiExampleApplication.class, args);
    }

    @Override
    public void run(String... args) {
        Student student = context.getBean(Student.class);
        student.display();
    }
}
