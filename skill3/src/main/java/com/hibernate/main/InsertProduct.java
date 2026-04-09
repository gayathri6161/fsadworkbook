package com.hibernate.main;

import org.hibernate.Session;
import org.hibernate.Transaction;
import com.hibernate.entity.Product;
import com.hibernate.util.HibernateUtil;

public class InsertProduct {

    public static void main(String[] args) {

        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();

        session.save(new Product("Laptop", "Electronics", 55000, 10));
        session.save(new Product("Mouse", "Electronics", 500, 50));
        session.save(new Product("Keyboard", "Electronics", 1200, 25));
        session.save(new Product("Chair", "Furniture", 3000, 5));
        session.save(new Product("Table", "Furniture", 7000, 2));
        session.save(new Product("Pen", "Stationery", 20, 100));

        tx.commit();
        session.close();

        System.out.println("Products inserted");
    }
}
