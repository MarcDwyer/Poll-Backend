package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"runtime"

	"github.com/gorilla/mux"
)

var mkey string
var port string
var reSite string
var reSecret string

func init() {
	fmt.Println(runtime.NumCPU())
	ky := &mkey
	//	err := godotenv.Load()
	//	if err != nil {
	//		log.Fatal("Error loading .env file")
	//	}
	*ky, port = os.Getenv("MONGODB"), os.Getenv("PORT")
	reSite, reSecret = os.Getenv("RESITE"), os.Getenv("RESECRET")
}

func main() {
	fmt.Println("server running...")

	hub := newHub()
	go hub.run()

	router := mux.NewRouter()
	router.HandleFunc("/api/create", Api)
	router.HandleFunc("/api/getpoll", Api)
	router.HandleFunc("/api/update", Api)
	router.HandleFunc("/auth", Auth)
	router.HandleFunc("/sockets/{id}", func(w http.ResponseWriter, r *http.Request) {
		Socketme(hub, w, r)
	})

	home := router.PathPrefix("/poll/").Subrouter()
	home.HandleFunc("/{rest:.*}", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./public/build/index.html")
	})

	router.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("./public/build"))))
	prt := fmt.Sprintf(":%v", port)
	log.Fatal(http.ListenAndServe(prt, router))
}
