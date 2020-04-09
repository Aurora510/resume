(function (){
    var el = document.getElementById('container');
    var oCerti = el.getElementsByClassName('certificate')[0];
    var oExpWork = el.getElementsByClassName('expWork')[0];
    var oExpSchool = el.getElementsByClassName('expSchool')[0];

    var certiTitle = oCerti.getElementsByClassName('title')[0];
    var expWorkTitle = oExpWork.getElementsByClassName('title')[0];
    var expSchoolTitle = oExpSchool.getElementsByClassName('title')[0];
    var certiLine = oCerti.getElementsByClassName('line')[0];
    var expWorkLine = oExpWork.getElementsByClassName('line')[0];
    var expSchoolLine = oExpSchool.getElementsByClassName('line')[0];

    var readmeData = myResumeData.readmeData;
    var expWorkData = myResumeData.expWorkData;
    var objDetailData = myResumeData.objDetailData;
    var expSchoolData = myResumeData.expSchoolData;
    var proShowData = myResumeData.proShowData;
    var skillData = myResumeData.skillData;

    function init(){
        initData();
        render();
        control();
    }
    function initData(){
         
    }
    /**
     * 渲染
     */
    function render(){
        var readmeDiv = oCerti.querySelector('.readme p');
        var introDiv = oExpWork.querySelector('.intro p');
        readmeDiv.innerHTML = readmeData;
        introDiv.innerHTML = expWorkData;
        renderObjItem();
        renderExpSchool();
        renderSecTitleLine();
        renderPro();
        renderSkills();
    }
    /**
     * 渲染大标题实线部分
     */
    function renderSecTitleLine(){
        certiLine.style.width = (oCerti.offsetWidth - certiTitle.offsetWidth - 20) + 'px';
        expWorkLine.style.width = (oExpWork.offsetWidth - expWorkTitle.offsetWidth - 20) + 'px';
        expSchoolLine.style.width = (oExpSchool.offsetWidth - expWorkTitle.offsetWidth - 20) + 'px';
        
    }
    /**
     * 渲染工作项目部分
     */
    function renderObjItem(){
        var objDetailDiv = oExpWork.getElementsByClassName('objDetail')[0];
        var arr = objDetailData;
        var len = objDetailData.length;
        var template = '';
        for(var i = 0; i<len; i++){
            template +=`
                <div class="objItem mrBot">
                    <div class="title"><span class="angle"></span> <h3>项目${i+1}：${arr[i].title}</h3></div><div class="line"></div>
                    <div class="content">
                        <div class="objTime mrTop mrBot"><b>项目时间：</b>${arr[i].time}</div>
                        <div class="objIntro mrBot flex"><span>项目描述：</span><p>${arr[i].intro}</p> </div>
                        <div class="myWork flex"><span>项目职责：</span><p>${arr[i].myWork}</p></div>
                    </div>
                </div>
            `
        }
        objDetailDiv.innerHTML = template;
    }
    /**
     * 渲染学校经历部分
     */
    function renderExpSchool(){
        var detailDiv = oExpSchool.getElementsByClassName('details')[0];
        var arr = expSchoolData;
        var len = expSchoolData.length;
        var template = '';
        for(var i=0 ; i<len ; i++){
            template+=`
                <div class="item mrBot">
                    <div class="title"><span class="angle"></span> <h3>${arr[i].title}</h3></div><div class="line"></div>
                    <div class="con">
                        <div class="flex mrBot mrTop">
                            <div class="name halve"><b>${arr[i].nameTitle}</b>${arr[i].name}</div>
                            <div class="time halve"><b>${arr[i].timeTitle}</b>${arr[i].time}</div>
                        </div>
                        <div class="intro flex mrBot"><span>${arr[i].introTitle}</span><p>${arr[i].intro}</p></div>
                        <div class="mywork flex" style="display:${arr[i].myWorkTitle?'flex':'none'}"><span>${arr[i].myWorkTitle}</span><p>${arr[i].myWork}</p></div>
                    </div>
                </div>
            `
        }
        detailDiv.innerHTML = template;
    }
    /**
     * 渲染我的作品部分
     */
    function renderPro(){
        var oPro = el.getElementsByClassName('projects')[0];
        var proShowDiv = oPro.getElementsByClassName('proShow')[0];
        var arr = proShowData;
        var len = proShowData.length;
        var template = '';
        for(var i = 0;i<len;i++){
            template +=`
                <li class="item"><a href="${arr[i].href}" target="_blank">
                    <img src="${arr[i].url}" alt="${arr[i].title}"><span>${arr[i].proName}</span>
                    <div class="mask">
                        <h4 class="mrBot">${arr[i].title}</h4>
                        <p class="intro">${arr[i].intro}</p>
                    </div>
                </a></li>
            `
        }
        proShowDiv.innerHTML = template;
    }
    /**
     * 渲染我的技能部分
     */
    function renderSkills(){
        var oSkills = el.getElementsByClassName('skills')[0];
        var skillList = oSkills.getElementsByClassName('skillList')[0];
        var arr = skillData;
        var len = skillData.length;
        var template = '';
        for(var i = 0;i<len;i++){
            template+=`
                <li class="mrBot">${arr[i]}</li>
            `
        }
        skillList.innerHTML = template;
    }
    
    /**
     * 点击事件
     */
    function control(){
        clickAngle();
        clickExpWork();
        clickWorkObj();
        clickExpSchool();
        clickSchoolItem();

    }
    function clickAngle(){
        var show = false;
        var angle = oCerti.getElementsByClassName('angle')[0];
        var title = oCerti.querySelector('.title h2');
        var line = oCerti.getElementsByClassName('line')[0];
        var detials = oCerti.getElementsByClassName('details')[0];
        angle.onclick = function(){
            if(show){
                angle.style.transform = 'rotate(0deg)';
                title.style.transform = 'scale(1)';
                line.style.width = (oCerti.offsetWidth - certiTitle.offsetWidth - 20) + 'px';
                detials.style.display = 'none';
                show = false;
            }else{
                angle.style.transform = 'rotate(90deg)';
                title.style.transform = 'scale(0)';
                line.style.width = (oCerti.offsetWidth - angle.offsetWidth - 20) + 'px';
                detials.style.display = 'flex';
                show = true;
            }
            
        }

    }
    function clickExpWork(){
        var show = false;
        var angle = oExpWork.getElementsByClassName('angle')[0];
        var firmDetail = oExpWork.getElementsByClassName('firmDetail')[0];
        var objDetail = oExpWork.getElementsByClassName('objDetail')[0];
        var len = objDetailData.length;
        
        angle.onclick = function(){
            if(show){
                closeObj();
                angle.style.transform = 'rotate(0deg)';
                firmDetail.style.display = 'none';
                objDetail.style.display = 'none';
                show = false;
            }else{
                angle.style.transform = 'rotate(90deg)';
                firmDetail.style.display = 'block';
                objDetail.style.display = 'block';
                show = true;
                for(var i = 0; i<len; i++){
                    var objItemDiv = oExpWork.getElementsByClassName('objItem')[i]
                    var titleDiv = objItemDiv.getElementsByClassName('title')[0];
                    var line = objItemDiv.getElementsByClassName('line')[0];
                    line.style.width = (objItemDiv.offsetWidth - titleDiv.offsetWidth - 20) + 'px';
                    line.style.animation = 'showLine 3s';
                }
            }
        }
    }
    function closeObj(){
        var objDetail = oExpWork.getElementsByClassName('objDetail')[0];
        var arr = objDetailData;
        var len = arr.length;
        for(var i = 0;i<len;i++){
            var objItem = objDetail.getElementsByClassName('objItem')[i];
            var angle = objItem.getElementsByClassName('angle')[0]; 
            var contentDiv = objItem.getElementsByClassName('content')[0];
            arr[i].show = false;
            angle.style.transform = 'rotate(0deg) scale(0.9)';
            contentDiv.style.display = 'none';
        }
    }
    function clickWorkObj(){
        
        var objDetail = oExpWork.getElementsByClassName('objDetail')[0];
        var arr = objDetailData;
        var len = arr.length;
        for(var i = 0;i<len; i++){
            var objItem = objDetail.getElementsByClassName('objItem')[i];
            var angle = objItem.getElementsByClassName('angle')[0]; 
            var contentDiv = objItem.getElementsByClassName('content')[0];
            (function(i,angle,contentDiv){
                angle.onclick = function(){
                    if(arr[i].show){
                        angle.style.transform = 'rotate(0deg) scale(0.9)';
                        contentDiv.style.display = 'none';
                        arr[i].show = false;
                    }else{
                        angle.style.transform = 'rotate(90deg) scale(0.9)';
                        contentDiv.style.display = 'block';
                        arr[i].show = true;
                    }
                } 
            })(i,angle,contentDiv)
            
        }
        
    }
    function clickExpSchool(){
        var show = false;
        var angle = oExpSchool.getElementsByClassName('angle')[0];
        var detailsDiv = oExpSchool.getElementsByClassName('details')[0];
        var arr = expSchoolData;
        var len = arr.length;
        
        angle.onclick = function(){
            if(show){
                closeItem();
                angle.style.transform = 'rotate(0deg)';
                detailsDiv.style.display = 'none';
                show = false;
            }else{
                angle.style.transform = 'rotate(90deg)';
                detailsDiv.style.display = 'block';
                show = true;
                for(var i = 0 ; i<len; i++){
                    var itemDiv = detailsDiv.getElementsByClassName('item')[i];
                    var titleDiv = itemDiv.getElementsByClassName('title')[0];
                    var line = itemDiv.getElementsByClassName('line')[0];
                    line.style.width = (itemDiv.offsetWidth - titleDiv.offsetWidth -20) + 'px';
                    line.style.animation = 'showLine 3s';
                }
            }
        }
    }
    function closeItem(){
        var detailsDiv = oExpSchool.getElementsByClassName('details')[0];
        var arr = expSchoolData;
        var len = arr.length;
        for(var i = 0;i<len;i++){
            var objItem = detailsDiv.getElementsByClassName('item')[i];
            var angle = objItem.getElementsByClassName('angle')[0]; 
            var contentDiv = objItem.getElementsByClassName('con')[0];
            arr[i].show = false;
            angle.style.transform = 'rotate(0deg) scale(0.9)';
            contentDiv.style.display = 'none';
        }
    }
    function clickSchoolItem(){
        var detailsDiv = oExpSchool.getElementsByClassName('details')[0];
        var arr = expSchoolData;
        var len = arr.length;
        for(var i = 0;i<len; i++){
            var objItem = detailsDiv.getElementsByClassName('item')[i];
            var angle = objItem.getElementsByClassName('angle')[0]; 
            var contentDiv = objItem.getElementsByClassName('con')[0];
            (function(i,angle,contentDiv){
                angle.onclick = function(){
                    if(arr[i].show){
                        angle.style.transform = 'rotate(0deg) scale(0.9)';
                        contentDiv.style.display = 'none';
                        arr[i].show = false;
                    }else{
                        angle.style.transform = 'rotate(90deg) scale(0.9)';
                        contentDiv.style.display = 'block';
                        arr[i].show = true;
                    }
                } 
            })(i,angle,contentDiv)
            
        }
    }


    init();
})()