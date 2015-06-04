#pragma strict

var bow : GameObject;
var arrow : GameObject;

var arrowForce : float;
private var arrowDrawForce : float;
private var arrowSpawned : GameObject;

function Start () {

}

function Update () {

	if (Input.GetButtonUp("Fire1")) {
		arrowSpawned = Instantiate(arrow, bow.transform.position, Quaternion.identity);
		arrowSpawned.GetComponent.<Rigidbody>().AddForce(Vector3(0,0,arrowForce));
	}

}