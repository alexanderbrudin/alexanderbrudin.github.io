

var projects = [
	{
		'name': 'Kinetic Art Ferrofluid Clock',
		'context': 'B.S. Mechanical Engineering Capstone Project',
		'details': 'As a member of an eight person team, I built a ferrofluid clock powered by a system of actuated magnets on the backend. The clock runs off of a Parallax microcontroller and an I2C servo driver to actuate the 28 servo motors. My primary contribution to this project was the hardware and software behind the user interface. I designed the laser cut face for the control panel and integrated the LCD screen functionality. Lastly, I took ownership over the project management portion of the project by cleaning out and improving the file storage and versioning systems, setting goals for each meeting, and writing much of the final report for the project. ',
		'tags': ['cad', ' 3d-printing', ' prototyping', ' laser-cutting', ' product-development', ' programming', ' mechatronics'],
		'images':['./project-images/ferrofluid1.png', './project-images/ferrofluid2.jpg']
	},{
		'name': 'Spiral Fidget Spinner',
		'context': 'Machine Design Course Project',
		'details': 'I fully designed, modeled, and constructed this fidget spinner based on requirements given for the project. Among these requirements were bolt and bearing selection, as well as manufacturing techniques. For the CAD model, the blue components were laser cut from 0.25 in. acrylic and the central clamping components (in orange) were 3D printed. ',
		'tags': ['cad', ' 3d-printing', ' prototyping', ' laser-cutting', ' DFX'],
		'images':['./project-images/fidgetspinner1.jpg', './project-images/fidgetspinner2.jpg', './project-images/fidgetspinner3.jpg']
	},{
		'name': '3D Printed Cantilever Beam',
		'context': 'Machine Design Course Project',
		'details': 'As a member of a group of three, we 3D printed this beam from ABS plastic with the goal to hold as much weight as possible within a 2 cu. in. volume limit and given mounting requirements. SolidWorks FEA simulations were conducted on each design iteration to estimate the load bearing capacity, deformation, and potential fracture points. The design in Figure 2 was an early model for the beam, while the design Figure 3 was the final model used by my group.',
		'tags': ['cad', ' 3d-printing', ' prototyping', ' FEA'],
		'images':['./project-images/cantilever1.jpg', './project-images/cantilever2.jpg', './project-images/cantilever3.png']
	},{
		'name': 'Ball Valve',
		'context': 'Personal Project',
		'details': 'I developed this model as an exploration into press fit tolerancing and gap tolerancing. All joints are intended to be press fit. The gap between the ball and the pipe meets clearance fit parameters. This clearance fit does not impede proper flow or stoppage across the valve. ',
		'tags': ['cad', ' GDT'],
		'images':['./project-images/ballvalve1.jpg', './project-images/ballvalve2.jpg', './project-images/ballvalve3.jpg']
	},{
		'name': '4 qt. Square Food Storage Container',
		'context': 'CAD Skills Assessment',
		'details': 'I took all dimensions for this part by hand from the physical model. This model provides an example of process and design for injection molded parts and includes proper lofts for manufacturability on all elements.',
		'tags': ['cad', ' reverse-engineering', ' DFM'],
		'images':['./project-images/container1.jpg', './project-images/container2.jpg']
	},{
		'name': 'Cooler with Onboard Speaker',
		'context': 'Personal Project',
		'details': 'This model is an original design for an injection molded cooler. As such, all cooler elements are lofted for manufacturability. The model features four elastic latches similar to those found on other modern coolers. ',
		'tags': ['cad'],
		'images':['./project-images/cooler1.jpg', './project-images/cooler2.jpg']
	},{
		'name': '6-pack Can Holder',
		'context': 'Personal Project',
		'details': 'I developed this design by reverse-engineering the product based on the physical model as an exploration into injection molding techniques. All dimensions were taken by hand.',
		'tags': ['cad', ' reverse-engineering', ' DFM'],
		'images':['./project-images/sixpack1.jpg', './project-images/sixpack2.jpg']
	},{
		'name': 'Machine Learning Analysis of Fish Habitats',
		'context': 'Machine Learning Course Project',
		'details': 'As a team of three, we assessed human disturbances to fish habitats in Virginia based on a number of factors from a found dataset. The degradation of fish habitats is of great environmental concern. We tested five different models based on the SciKit-Learn library models, and found a Random Forest Regressor to be the most accurate. Our machine learning model used a regressor to assign a "risk score" to each habitat location. This model trained on 43,852 habitat location entries in Virginia and returned a 85% accuracy on the 4,872 locations in our testing set. ',
		'tags': ['machine-learning', ' data-science', ' programming'],
		'images':['./project-images/fishhabitats1.png']
	},{
		'name': 'Baseball Analytics',
		'context': 'Personal Project',
		'details': 'This exploration analyzed the end-of-season rankings and statistics for every Major League Baseball team over the past ten seasons. Early analysis centered on data analysis of which teams were consistently successful this past decade, while recent work has moved toward finding a deeper understanding in team-by-team statistics through a machine learning approach. I applied a clustering algorithm to the teams to find commonalities between successful and unsuccessful teams, and I applied a regressor to estimate the team rankings and analyze feature importance. ',
		'tags': ['machine-learning', ' data-science', ' programming'],
		'images':['./project-images/baseball1.png', './project-images/baseball2.png', './project-images/baseball3.png']
	},{
		'name': 'Control and Simulation of non-Holonomic Robot Behaviors',
		'context': 'Autonomous Mobile Robotics Course Project',
		'details': 'Through both individual work and in a team of 3, this project used ROS with Python to model and tune control algorithms for go-to-goal, follow-a-wall, and follow-a-path behaviors. Additionally, this project used MATLAB to model a potential field obstacle avoidance algorithm and simulated behavior for both holonomic and non-holonomic vehicle dynamics.',
		'tags': ['programming', 'robotics'],
		'images': ['./project-images/Robot1.jpg', './project-images/Robot2.jpg', './project-images/Robot3.jpg', './project-images/Robot4.jpg', './project-images/Robot5.jpg']
	},{
		'name': 'Machine Learning Analysis of Handwashing Motion',
		'context': 'Machine Learning Course Project',
		'details': 'This project involved data collection of both hand washing and non-handwashing data on an Android smart watch. Based on the IMU data from the smart watch, a decision tree classifier was built in WEKA to evaluate, based on the parameters of the 6 DOF IMU, whether or not a given motion could be hand washing.',
		'tags': ['programming', 'machine-learning'],
		'images': []
	},{
		'name': 'Construction of Kalman Filter and Particle Filter',
		'context': 'Autonomous Mobile Robotics Course Project',
		'details': "This project used MATLAB to build a Kalman Filter and to model and fuse two GPS sensors and controller input with Gaussian noise and estimate a robot's position for go-to-goal behavior. I also used MATLAB to build a Particle Filter which utilized 6 landmarks in the environment to localize a robot's position in 10 iterations. The filter was based on a LIDAR-type sensor which could determine the distance to each landmark, and trials were run with a 30m limit and with no limit on the sensor range.",
		'tags': ['programming', 'robotics'],
		'images': ['./project-images/KF_MeasurementAndEstimate.jpg', './project-images/KF_Pos,Vel,Dist.jpg', './project-images/PF_NoLim.jpg', './project-images/PF_WithLim.jpg']
	},{
		'name': 'Identification of Trumpet Hand Positions using Machine Learning Techniques',
		'context': 'Machine Learning Course Project',
		'details': 'This project involved data collection of six Trumpet hand positions on an Android smart watch. An automated data cleaning pipeline was built in Python for feature extraction from the accelerometer and gyroscope data extracted from the watch. The extracted features were processed with a WEKA decision tree classifier, random forest classifier, and SVM and achieved 96% accuracy with both the decision tree and the random forest. To reduce time and complexity of the machine learning system, a feature selection algorithm was built in java to reduce the initial 24 features down to the most pertinent four features, which matched 96% accuracy but with much lower time and memory complexity.',
		'tags': ['programming', 'machine-learning'],
		'images': []
	},{
		'name': 'Estimation and Trajectory Planning for a Frogger Robot',
		'context': 'Autonomous Mobile Robotics Course Project',
		'details': "This project used ROS with Python to process and fuse LiDAR data to estimate positions and velocities of an arbitrary number of traffic robots in the environment. For trajectory planning, to move safely from start to goal, we utilized an MPC-style potential field obstacle avoidance algorithm to plan the trajectory of the ego robot based on the predicted positions of the traffic robots. Additionally, we used Gazebo and rviz to construct a world for the ego robot with random motions for an arbitrary number of traffic robots and to collect and visualize data from each run of the ego robot.",
		'tags': ['programming', 'robotics'],
		'images': ['sample_frogger_game.png''robot_estimation.png', 'timevsstops.png', 'robot_estimated_error.png']
	}
];

function initialProjects(){
	addProjects(projects);
}

function tagActive(el){
	if (el.className == "tag-select") {
		el.classList.remove("tag-select");
		tagsList = document.getElementsByClassName("tag-select");
		checkTags(tagsList);
		if (tagsList.length == 0) {
			addProjects(projects);
		}
	} else {
		el.classList.add("tag-select");
		tagsList = document.getElementsByClassName("tag-select");
		checkTags(tagsList);
	}
}

function checkTags(tagList) {
	var inclProjects = [];
	var tagPresent = false;

	for (i = 0; i < projects.length; i++) {
		tagPresent = false;
		let projectTags = projects[i].tags.map(tag => tag.trim());
		for (j = 0; j < tagList.length; j++) {
			var currentTag = tagList[j].innerHTML.substr(1);
			if ( projectTags.includes(currentTag)) {
				tagPresent = true;
			} else { 
				tagPresent = false; 
				break;
			}
		}
		if (tagPresent) { inclProjects.push(projects[i]); }
	}

	addProjects(inclProjects);
}

function addProjects(projectList) {
	document.getElementById("display-search").innerHTML = "";
	if(projectList.length > 0){
		var divNode, hNode, pNode;
		var hText, pText;
		for (i = 0; i < projectList.length; i++) {
			divNode = document.createElement("div");
			hNode = document.createElement("h1");
			pNode = document.createElement("P");
			hText = document.createTextNode(projectList[i].name);
			pText = document.createTextNode(projectList[i].details);
			hNode.appendChild(hText);
			pNode.appendChild(pText);
			divNode.appendChild(hNode);
			divNode.appendChild(pNode);
			divNode.onclick = function() { toggleDisplay(this); };
			document.getElementById("display-search").appendChild(divNode);
		}
	}
}

function toggleDisplay(el) {
	var page = document.getElementById("page-content");
	var project = document.getElementById("project-details");
	var projContent  = document.getElementById("project-content");

	if (page.style.display != "none") { 
		projContent.innerHTML = "";
		page.style.display = "none"; 
		project.style.display = "inline-block";

		var projName = el.innerHTML.split('<')[1].substr(3);
		var currentProject = returnProj(projName);

		var hNode, cNode, sNode, dNode, hText, cText, sText, dText;
		var cSpan, csText, sSpan, ssText, dSpan, dsText;
		var imgNode;

		hNode = document.createElement("h1");
		hText = document.createTextNode(currentProject.name);
		hNode.appendChild(hText);

		cSpan = document.createElement("span");
		csText = document.createTextNode("Context")
		cSpan.appendChild(csText);

		cNode = document.createElement("p");
		cText = document.createTextNode(currentProject.context);
		cNode.appendChild(cText);

		sSpan = document.createElement("span");
		ssText = document.createTextNode("Skills")
		sSpan.appendChild(ssText);

		sNode = document.createElement("p");
		sText = document.createTextNode(currentProject.tags);
		sNode.appendChild(sText);

		dSpan = document.createElement("span");
		dsText = document.createTextNode("Details")
		dSpan.appendChild(dsText);

		dNode = document.createElement("p");
		dText = document.createTextNode(currentProject.details);
		dNode.appendChild(dText);

		projContent.appendChild(hNode);
		projContent.appendChild(cSpan);
		projContent.appendChild(cNode);
		projContent.appendChild(sSpan);
		projContent.appendChild(sNode);
		projContent.appendChild(dSpan);
		projContent.appendChild(dNode);

		imgNode = document.createElement("div");

		for(j=0; j < currentProject.images.length; j++){
			var image = document.createElement("img");
			image.setAttribute("src", currentProject.images[j])
			imgNode.appendChild(image);
		}

		projContent.appendChild(imgNode);
	} else { 
		page.style.display = "flex"; 
		project.style.display = "none";
	}
}

function returnProj(clickName) {
	for (i=0; i < projects.length; i++) {
		if (projects[i].name == clickName) { return projects[i]; }
	}
}