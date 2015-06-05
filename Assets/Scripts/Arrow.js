#pragma strict
var rotate : boolean = true;

function Start () {

}

function OnCollisionEnter (collision : Collision) {
	
	rotate = false;
	//Debug.Log("Collision!");
	
	if (collision.relativeVelocity.magnitude > 7) {
		GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeAll;
		gameObject.GetComponent.<ParticleSystem>().Play();
	}
	
}

function Update () {
	
	if (rotate == true) {
		transform.position = gameObject.transform.position;
		transform.LookAt(transform.position + gameObject.GetComponent.<Rigidbody>().velocity);
	}
	
}