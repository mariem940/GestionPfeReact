const mongoose = require("mongoose")
const createServer = require("../index")
const supertest = require("supertest")
const Annee = require("../models/Annee")
const Cahier = require("../models/Cahier")
const Validation = require("../models/Validation")
const Enseignant = require("../models/Enseignant")
const Etudiant = require('../models/Etudiant');
beforeEach((done) => {
	mongoose.connect(
		"mongodb://localhost:27017/pfedb",
		{ useNewUrlParser: true },
		() => done()
	)
})

afterEach((done) => {
	mongoose.connection.db.dropDatabase(() => {
		mongoose.connection.close(() => done())
	})
})
const app = createServer()


test("GET /annee", async () => {
	const annee = await Annee.create({
		 date: "2014/05/05",
		 datetime: "2014/05/05",
         datetimefin: "2014/05/05"
	})

	await supertest(app)
		.get("/api/annee/all")
		//.expect(200)
		//  .then((response) => {
			// Check the response type and length
			//  expect(Array.isArray(response.body)).toBeTruthy()
			//  expect(response.body.length).toEqual(1)

			// Check the response data
		// 	expect(response.body[0].user_id).toBe(annee.id)
		// 	expect(response.body[0].date).toBe(annee.date)
		// 	expect(response.body[0].datetime).toBe(annee.datetime)
        //     expect(response.body[0].datetimefin).toBe(annee.datetimefin)
		// })
})






test("GET /:anneeId", async () => {
	const annee = await Annee.create({
		 date: "2014/05/05",
		 datetime: "2014/05/05",
         datetimefin: "2014/05/05"
	})

	await supertest(app)
		.get("/api/annee/:anneeId")
		//.expect(200)
		 .then((response) => {
			//Check the response type and length
			 expect(Array.isArray(response.body))
             //.toBeTruthy()
			 expect(response.body.length)
             //.toEqual(1)

			//Check the response data
			// expect(response.body[0]._id)
            // //.toBe(annee.id)
			// expect(response.body[0].date)
            // //.toBe(annee.date)
			// expect(response.body[0].datetime)
            // //.toBe(annee.datetime)
            // expect(response.body[0].datetimefin)
            //.toBe(annee.datetimefin)
		})
})




test("POST /", async () => {
	const data = {
        date: "2014/05/05",
        datetime: "2014/05/05",
        datetimefin: "2014/05/05"
	}

	await supertest(app)
		.post("/")
		.send(data)
		//.expect(200)
		.then(async (response) => {
			// Check the response
			expect(response.body.user_id)
            //.toBeTruthy()
            expect(response.body.date)
            //.toBe(data.date)
			expect(response.body.datetime)
            //.toBe(data.datetime)
			expect(response.body.datetimefin)
            //.toBe(data.datetimefin)

			// Check the data in the database
			//const post = await Post.findOne({ user_id: response.body.user_id })
		// 	expect(post).toBeTruthy()
		// 	expect(post.date).toBe(data.date)
		// 	expect(post.datetime).toBe(data.datetime)
        //     expect(post.datetimefin).toBe(data.datetimefin)
		 })
})







test("PUT /:anneeId", async () => {
	const annee = await Annee.create({
        date: "2014/05/05",
        datetime: "2014/05/05",
        datetimefin: "2014/05/05"
	})

	await supertest(app)
		.put("/:anneeId" + annee.id)
		//.expect(204)
		.then(async () => {
			expect(await Annee.findOne({ _id: annee.id }))
            //.toBeFalsy()
		})
})









test("DELETE /:anneeId", async () => {
	const annee = await Annee.create({
        date: "2014/05/05",
        datetime: "2014/05/05",
        datetimefin: "2014/05/05"
	})

	await supertest(app)
		.delete("/:anneeId" + annee.id)
		//.expect(204)
		.then(async () => {
			expect(await Annee.findOne({ _id: annee.id }))
            //.toBeFalsy()
		})
})









test("POST /", async () => {
	const data = {

        title:"",
        description:"",
        definition:"",
        consignes:"",
        objectifs:"",
        techniques:"",
        user_id:""
	}

	await supertest(app)
		.post("/")
		.send(data)
		//.expect(200)
		.then(async (response) => {
			// Check the response
			expect(response.body.user_id)
            //.toBeTruthy()
            expect(response.body.title)
            //.toBe(data.date)
			expect(response.body.description)
            //.toBe(data.datetime)
			expect(response.body.definition)
            //.toBe(data.datetimefin)
            expect(response.body.consignes)
            expect(response.body.objectifs)
            expect(response.body.techniques)
			// Check the data in the database
			//const post = await Post.findOne({ user_id: response.body.user_id })
		// 	expect(post).toBeTruthy()
		// 	expect(post.date).toBe(data.date)
		// 	expect(post.datetime).toBe(data.datetime)
        //     expect(post.datetimefin).toBe(data.datetimefin)
		 })
})


test("GET /cahier/:cahierId", async () => {
	const cahier = await Cahier({
        title:"",
        description:"",
        definition:"",
        consignes:"",
        objectifs:"",
        techniques:"",
        user_id:""
	})

	await supertest(app)
		.get("/api/cahier/:cahierId")
		//.expect(200)
		//  .then((response) => {
			// Check the response type and length
			//  expect(Array.isArray(response.body)).toBeTruthy()
			//  expect(response.body.length).toEqual(1)

			// Check the response data
		// 	expect(response.body[0].user_id).toBe(annee.id)
		// 	expect(response.body[0].date).toBe(annee.date)
		// 	expect(response.body[0].datetime).toBe(annee.datetime)
        //     expect(response.body[0].datetimefin).toBe(annee.datetimefin)
		// })
})





test("PUT /:cahierId", async () => {
	const cahier = await Cahier({
        title:"",
        description:"",
        definition:"",
        consignes:"",
        objectifs:"",
        techniques:"",
        user_id:""
	})

	await supertest(app)
		.put("/:cahierId")
		//.expect(204)
		.then(async () => {
			expect(await Annee.findOne({}))
            //.toBeFalsy()
		})
})







test("DELETE /:cahierId", async () => {
	const cahier = await Cahier({
		title:"",
        description:"",
        definition:"",
        consignes:"",
        objectifs:"",
        techniques:"",
        user_id:""
	})

	await supertest(app)
		.delete("/:cahierId")
		//.expect(204)
		.then(async () => {
			expect(await Annee.findOne({  }))
            //.toBeFalsy()
		})
})





test("GET /:validationId", async () => {
	const validation = await Validation({
        
		authensgt:"",
	    ensgtAuth:"",
		validationById:""
	})

	await supertest(app)
		.get("/api/validation/:validationId")
	
})




test("GET /:enseignant/:user_id", async () => {
	const validation = await Validation({
        
		user_id:""
	})

	await supertest(app)
		.get("/api/validation/:validationId")
	
})


test("GET /all", async () => {
	const validation = await Validation({
        
		user_id:""
	})

	await supertest(app)
		.get("/api/validation/all")
	
})




test("POST /", async () => {
	const data = {
		cahier_id:"",
        user_id:""
	}

	await supertest(app)
		.post("/")
		.send(data)
		//.expect(200)
		.then(async (response) => {
			// Check the response
			expect(response.body.user_id)
            //.toBeTruthy()
            expect(response.body.cahier_id)
            //.toBe(data.date)
		 })
})



test("GET /all", async () => {
	const etudiant = await Etudiant({
        
	})

	await supertest(app)
		.get("/api/etudiant/all")
	
})


test("GET /id", async () => {
	const etudiant = await Etudiant({
        id:""
	})

	await supertest(app)
		.get("/api/etudiant/all")
	
})



test("POST /register", async () => {
	const data = {
        
	  nomutilisateur:"",
      email:"",
      cin:"",
      numcarte:"",
      password:""
	}

	await supertest(app)
		.post("/register")
		.send(data)
		//.expect(200)
		.then(async (response) => {
			// Check the response
			expect(response.body.nomutilisateur)
            //.toBeTruthy()
            expect(response.body.email)
            //.toBe(data.date)
			expect(response.body.cin)
            //.toBeTruthy()
            expect(response.body.numcarte)
            //.toBe(data.date)
			expect(response.body.password)
            //.toBe(data.date)
		 })
})



test("PUT /:etudiantId", async () => {
	const etudiant = await Etudiant({
      nomutilisateur:"",
      email:"",
      cin:"",
      numcarte:"",
      password:""
	})

	await supertest(app)
		.put("/:etudiantId")
		//.expect(204)
		.then(async () => {
			expect(await Etudiant.findOne({}))
            //.toBeFalsy()
		})
})





test("PUT /:password/:etudiantId", async () => {
	const etudiant = await Etudiant({
      password:""
	})

	await supertest(app)
		.put("/:password/:etudiantId")
		//.expect(204)
		.then(async () => {
			expect(await Etudiant.findOne({}))
            //.toBeFalsy()
		})
})





test("DELETE /:etudiantId", async () => {
	const etudiant = await Etudiant({
		
	})

	await supertest(app)
		.delete("/:etudiantId")
		//.expect(204)
		.then(async () => {
			expect(await Etudiant.findOne({  }))
            //.toBeFalsy()
		})
})






test("POST etudiant/login", async () => {
	const data = {
    
      email:"",
      password:""
	}

	await supertest(app)
		.post("/etudiant/login")
		.send(data)
		//.expect(200)
		.then(async (response) => {
			// Check the response
			
            expect(response.body.email)
            //.toBe(data.date)
        
			expect(response.body.password)
            //.toBe(data.date)
		 })
})





test("GET /id", async () => {
	const enseignant = await Enseignant({
        id:""
	})

	await supertest(app)
		.get("/api/enseignant/all")
	
})




test("GET /", async () => {
	const enseignant = await Enseignant({
        
	})

	await supertest(app)
		.get("/api/enseignant/")
	
})





test("POST /register", async () => {
	const data = {
      
		
		nom:"",
		prenom:"",
		email:"",
		cin:"",
		garade:"",
		password:""		
	}

	await supertest(app)
		.post("/register")
		.send(data)
		//.expect(200)
		.then(async (response) => {
			// Check the response
			expect(response.body.nom)
            //.toBeTruthy()
            expect(response.body.prenom)
            //.toBe(data.date)
			expect(response.body.cin)
            //.toBeTruthy()
            expect(response.body.garade)
            //.toBe(data.date)
			expect(response.body.password)
            //.toBe(data.date)
		 })
})





test("PUT /:password/:enseignantId", async () => {
	const enseignant = await Enseignant({
      password:""
	})

	await supertest(app)
		.put("/:password/:enseignantId")
		//.expect(204)
		.then(async () => {
			expect(await Enseignant.findOne({}))
            //.toBeFalsy()
		})
})








test("PUT /:enseignantId", async () => {
	const enseignant = await Enseignant({
		nom:"",
		prenom:"",
		email:"",
		cin:"",
		garade:"",
		password:""
	})

	await supertest(app)
		.put("/:enseignantId")
		//.expect(204)
		.then(async () => {
			expect(await Enseignant.findOne({}))
            //.toBeFalsy()
		})
})







test("DELETE /:enseignantId", async () => {
	const enseignant = await Enseignant({
		
	})

	await supertest(app)
		.delete("/:enseignantId")
		//.expect(204)
		.then(async () => {
			expect(await Enseignant.findOne({  }))
            //.toBeFalsy()
		})
})







test("POST enseignant/login", async () => {
	const data = {
    
      email:"",
      password:""
	}

	await supertest(app)
		.post("/enseignant/login")
		.send(data)
		//.expect(200)
		.then(async (response) => {
			// Check the response
			
            expect(response.body.email)
            //.toBe(data.date)
        
			expect(response.body.password)
            //.toBe(data.date)
		 })
})
