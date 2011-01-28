//adds style and header to sample pages

style = document.createElement("link");
style.type = "text/css";
style.rel = "stylesheet";
style.href = "css/style.css";

head = document.getElementsByTagName("head")[0];
head.appendChild(style);

header = document.createElement("div");
header.id = "header";

para = document.createElement("p");

tag = document.createElement("a");
tag.href = "http://code.google.com/apis/fusiontables/docs/sample_code.html";
tag.innerHTML = "&lt; Back to Fusion Tables samples";

para.appendChild(tag);
header.appendChild(para);

document.body.insertBefore(header, document.body.childNodes[0]);
