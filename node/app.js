var nodeexec = require('child_process').exec;
//console.log("Directory Name:  "+__dirname);

//executeJava("student_1","prog_1");

var studentList = [];
var progList = [];


console.log(progList);
function executeJava(studentName,programName) {
	
	nodeexec('javac '+__dirname+'/group/'+studentName+'/'+programName+'/'+programName+'.java', function callback(error, stdout, stderr){
		if(error == null){
			console.log("RUN the program");
			nodeexec('java -cp '+__dirname+'/group/'+studentName+'/'+programName+' '+programName, function callback(error, stdout, stderr){
				if(error == null){
					output=stdout;
					output=stderr;
					console.log(stderr)
					console.log("Student Name:  " + studentName);
					console.log("Question:  " + programName);
					console.log("Compile : Success");
					console.log("Run : Success");
					console.log(stdout);
					//console.log("NODE EXEC4: "+stdout);
					//console.log("NODE EXEC4: "+stderr);
				} else {
					console.log("Student Name:  " + studentName);
					console.log("Question:  " + programName);
					console.log("Compile : Success");
					console.log("Run : Failed");
					console.log("ERROR:  "+error);
				}
			});
		
		} else {
			console.log("Student Name:  " + studentName);
			console.log("Question:  " + programName);
			console.log("Compile : Failed");
			console.log("Run : Failed");
			output=stderr;
			console.log("NODE EXEC: "+stderr);
			//console.log("NODE EXEC: "+stdout);
			//console.log("NODE EXEC: "+stderr);
		}
	});
}

var fs = require('fs');
var folders = fs.readdirSync(__dirname+"/group");
for (var i in folders) {
		var name = __dirname + "/group/" + folders[i];
	        if (fs.statSync(name).isDirectory()){
	        	studentList.push(folders[i])
	        	//console.log(folders[i])
	        	progFolders = fs.readdirSync(name);
				for (var j in progFolders) {
					var name = __dirname + "/group/" +folders[i]+"/"+ progFolders[j];
				        if (fs.statSync(name).isDirectory()){
				        	progList.push(progFolders[j]);
				        	console.log(progFolders[j])
				        	executeJava(folders[i],progFolders[j]);
				        }
				    
			    }
	        }
	    
    }
