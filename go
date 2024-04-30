package main

import (
    "fmt"
    "log"
    "net/http"
)

func main() {
    http.HandleFunc("/send-email", sendEmailHandler)
    http.HandleFunc("/sent-emails", sentEmailsHandler)
    log.Fatal(http.ListenAndServe(":8080", nil))
}

func sendEmailHandler(w http.ResponseWriter, r *http.Request) {
    // Handle sending emails here
    // You can use a third-party library like smtp.SendMail
    // Example:
    // smtp.SendMail("smtp.example.com:587", auth, "sender@example.com", []string{"recipient@example.com"}, []byte("Subject: Test\r\n\r\nThis is a test email"))
    fmt.Fprintf(w, "Email sent successfully!")
}

func sentEmailsHandler(w http.ResponseWriter, r *http.Request) {
    // Retrieve sent emails from the database and return them as JSON
    fmt.Fprintf(w, `[{"id": 1, "sender": "sender@example.com", "recipient": "recipient@example.com", "subject": "Test", "body": "This is a test email", "timestamp": "2024-04-30T12:00:00Z"}]`)
}
