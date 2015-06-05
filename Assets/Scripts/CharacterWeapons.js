#pragma strict

var bow : GameObject;
var arrow : GameObject;

var arrowForce : float;
var arrowPullSpeed : float;
var arrowDrawForce : float;

var bowRealeaseSounds : AudioClip[];
private var arrowSpawned : GameObject;

function Start () {

}

function Update () {
	
	//Når man giver slip på pilen
	if (Input.GetButtonUp("Fire1")) {
		arrowSpawned = Instantiate(arrow, bow.transform.position, bow.transform.rotation);
		arrowSpawned.GetComponent.<Rigidbody>().AddForce(bow.transform.forward * arrowForce * arrowDrawForce);
		
		arrowDrawForce = 0;
		bow.GetComponent.<AudioSource>().PlayOneShot(bowRealeaseSounds[Random.Range(0,bowRealeaseSounds.Length)],1.0);
	}
	
	//Når man trækker tilbage
	if (Input.GetButton("Fire1") && arrowDrawForce < 1) {
		arrowDrawForce += arrowPullSpeed * Time.deltaTime;
	}
	
}