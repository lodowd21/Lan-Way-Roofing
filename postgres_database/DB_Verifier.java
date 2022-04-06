package lanway;

/**
 * Liam O'Dowd
 */

import java.sql.*;

public class DB_Verifier {

   static final String DB_URL = "jdbc:postgresql://lanway-db.postgres.database.azure.com:5432/lanway-website-db?sslmode=require";
   static final String USER = "lodowd";
   static final String PASS = "*********";
   static final String QUERY = "SELECT * FROM \"Employee\"";

   public static void main(String[] args) {
      // Open a connection
      try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
         Statement stmt = conn.createStatement();
         ResultSet rs = stmt.executeQuery(QUERY);) {
         // Extract data from result set
         while (rs.next()) {
            // Retrieve by column name
            System.out.print("ID: " + rs.getInt("ID"));
            System.out.print(", First: " + rs.getString("first_name"));
            System.out.println(", Last: " + rs.getString("last_name"));
         }
      } catch (SQLException e) {
         e.printStackTrace();
      } 
   }
}

