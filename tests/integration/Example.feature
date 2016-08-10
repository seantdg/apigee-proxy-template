Feature: As an API consumer, I want to make some requests
	
	#This test can be run against the mock and the real backend
	Scenario: I successfully make a request
		When I GET /get
		Then response code should be 200
