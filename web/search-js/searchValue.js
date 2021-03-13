function seachItemsByKeyWord() {
    var wordInput = document.getElementById("seach-field").value;
    var wordChange = wordInput.toUpperCase();
    console.log(wordChange);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "js/MV_Product_List.json", true);
    xmlhttp.send();

    if (wordInput != "") {
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                $('#svg-body').remove();
                var svgBody = document.createElement('div');
                svgBody.setAttribute("id", "svg-body");
                svgBody.setAttribute("class", "svg-body");
                document.getElementById("svg-container").appendChild(svgBody);
                var data = JSON.parse(this.responseText);
                for (var i = 0; i < Object.keys(data).length; i++) {
                    if (data[i].motor.Name.includes(wordChange)) {
                        var prOBj = document.createElement('div');
                        prOBj.setAttribute('class', 'mv-object-container');
                        prOBj.setAttribute('id', 'mv-obj' + i);
                        document.getElementById('svg-body').appendChild(prOBj);
                        var prImage = document.createElement('div');
                        prImage.setAttribute("class", "mv-product-img");
                        document.getElementById('mv-obj' + i).appendChild(prImage);
                        var prContent = document.createElement('div');
                        prContent.setAttribute("class", "mv-product-content");
                        prContent.setAttribute("id", "mv-pr-content" + i);
                        document.getElementById('mv-obj' + i).appendChild(prContent);
                        var prInfor = document.createElement('div');
                        prInfor.setAttribute('class', 'mv-product-content-infor');
                        prInfor.setAttribute('id', 'mv-product-content-infor' + i);
                        document.getElementById('mv-pr-content' + i).appendChild(prInfor);
                        var prHeader = document.createElement('h3');
                        prHeader.setAttribute('class', 'mv-pr-header');
                        prHeader.setAttribute('id', 'mv-pr-header' + i);
                        prHeader.appendChild(document.createTextNode(data[i].motor.Name));
                        document.getElementById('mv-product-content-infor' + i).appendChild(prHeader);
                        var prModelContent = document.createElement('p');
                        prModelContent.setAttribute('class', 'mv-pr-context');
                        prModelContent.setAttribute('id', 'mv-pr-context' + i);
                        prModelContent.appendChild(document.createTextNode(data[i].motor.Slogan));
                        document.getElementById('mv-product-content-infor' + i).appendChild(prModelContent);
                    }
                }
            }
        };
    }else{
        $('#svg-body').remove();
    }
}