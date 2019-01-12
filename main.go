package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"runtime"

	"github.com/joho/godotenv"
)

var mkey string
var port string
var reSite string
var reSecret string

func init() {
	fmt.Println(runtime.NumCPU())
	ky := &mkey
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	*ky, port = os.Getenv("MONGODB"), os.Getenv("PORT")
	reSite, reSecret = os.Getenv("RESITE"), os.Getenv("RESECRET")
}

func main() {
	fmt.Println("server running...")
	hub := newHub()
	go hub.run()

	http.HandleFunc("/api/create", Api)
	http.HandleFunc("/api/getpoll", Api)
	http.HandleFunc("/api/update", Api)
	http.HandleFunc("/auth", Auth)
	http.HandleFunc("/sockets/{id}", func(w http.ResponseWriter, r *http.Request) {
		Socketme(hub, w, r)
	})

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/manifest.json" || r.URL.Path == "/favicon.png" {
			str := fmt.Sprintf("./public/build/%v", r.URL.Path)
			http.ServeFile(w, r, str)
			return
		}
		http.ServeFile(w, r, "./public/build/index.html")
	})

	prt := fmt.Sprintf(":%v", port)
	log.Fatal(http.ListenAndServe(prt, nil))
}
