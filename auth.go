package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type Recaptcha struct {
	Secret   string `json:"secret"`
	Response string `json:"response"`
}

type Result struct {
	Success     bool      `json:"success"`
	ChallengeTs time.Time `json:"challenge-ts"`
	Hostname    string    `json:"hostname"`
	ErroCodes   []string  `json:"error-codes"`
}

func Auth(w http.ResponseWriter, r *http.Request) {
	var str string
	json.NewDecoder(r.Body).Decode(&str)
	url := fmt.Sprintf("https://www.google.com/recaptcha/api/siteverify?secret=%v&response=%v", reSecret, str)
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println(err)
	}
	defer resp.Body.Close()

	var result Result
	json.NewDecoder(resp.Body).Decode(&result)
	writer, _ := json.Marshal(result)
	w.Write(writer)
}
