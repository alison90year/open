<template>
  <div id="about-Anchor">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="开播教程" name="first">
        <div class="Account">
          <h1 style="padding-bottom: 15px">
            <center>龙牙直播新人主播开播教程</center>
          </h1>
          <h4>
            一、在开播前需要在龙牙直播官网<a href="http://www.longya.tv"
              >http://www.longya.tv进行登录账号</a
            >
          </h4>
          <img src="" />
          <h4>二、在首页点击右上角头像，选择【个人中心】</h4>
          <img src="" />
          <h4>
            三、点击<span>我要直播</span>，然后选择直播的<span>分类、赛事</span>；依次填写直播<span>标题</span>与<span>公告</span>，点击确定。
          </h4>
          <img src="" />
          <h4>
            四、复制<span>推流地址</span>，黏贴到
            <span>OBS</span> 的对应位置即可哦。
          </h4>
          <img src="" />
          <h4>接下来就可以使用obs推流进行直播啦</h4>
          <h4>选择并下载</h4>
          <h4>
            一、下载地址：<a href="https://obsproject.com/download"
              >选择对应系统点击绿色按钮下载安装程序</a
            >
          </h4>
          <img src="" />
          <h4>二、准备开播</h4>
          <h4>1.打开obs软件</h4>
          <img src="" />
          <h4>2.选择直播内容</h4>
          <img src="" />
          <img src="" />
          <h4>
            注：选择来源时，右键添加显示器获取或直播源（在显示器获取、图片、文字、游戏源、基础上选择position/size，可以更改屏幕大小、居中，水平）
          </h4>
          <h4>
            3.配置服务器及串流密钥：进入自己的个人中心将推流地址复制在obs推流地址中；
          </h4>
          <h4>
            需注意所复制的推流地址：rtmp://tui5.dysdbg.com/anchor/104865?auth_key=1595751406-0-0-393b8a7bb21c6d980fcf85267c35ca12
          </h4>
          <h4>上述地址中包含了服务器地址（URL）及串流密钥</h4>
          <h4>服务器：rtmp://tui5.dysdbg.com/anchor/</h4>
          <h4>
            串流密钥：104865?auth_key=1595751406-0-0-393b8a7bb21c6d980fcf85267c35ca12
          </h4>
          <img src="" />
          <img src="" />
          <h4>4.开始直播</h4>
          <img src="" />
          <h4>注：开始推流后在网页端刷新直播间即可显示直播中</h4>
          <h4>5.结束直播</h4>
          <img src="" />
          <h4>三、详细教程</h4>
          <h4>
            高阶玩家，可参考OBS视频教程地址：<a
              href="https://www.bilibili.com/video/av21949746?from=search&amp;seid=13114083936042338740"
              >https://www.bilibili.com/video/av21949746?from=search&amp;seid=13114083936042338740</a
            >
          </h4>
          <h4>四、常见问题</h4>
          <h4>1.画面卡是怎么回事？</h4>
          <h4>
            打开OBS界面，看是否有跳帧，丢帧现象。跳帧，说明你CPU吃不消，降低分辨率。丢帧，说明你最大比特率（码率）太高了，实际上传速度达不到，才会丢帧，降低码率。这种情况小区共享宽带特别常见。
          </h4>
          <h4>2.为什么我看不到直播画面/直播不了/提示重新连接？</h4>
          <h4>
            看一下软件右下角是否为灰色，灰色表示未推流成功，请检查网络、电脑防火墙和直播码是否正确。
          </h4>
          <h4>
            <center style="padding: 29px 0; font-size: 30px; color: #55aaff">
              开始你的直播吧，畅所欲言看比赛
            </center>
          </h4>
        </div>
      </el-tab-pane>
      <el-tab-pane label="主播问题" name="second">
        <div class="content-box">
          <ul>
            <li>
              问：如何开启直播？<br />答：年满18岁，通过实名认证，就可以申请自己的直播间开始直播了。
            </li>
            <li>
              问：为什么认证失败？<br />答：实名认证需提供本人清晰完整的身份证正面照片进行认证。
            </li>
            <li>
              问：哪些能播？哪些不能播？<br />答：<a href="/help/live-guifan"
                >点击查看龙牙直播规范 </a
              >, 具体问题可加客服邮箱咨询，qq邮箱：paidaxing09@gmail.com
            </li>
            <li>
              问：为什么我的直播间被关闭了？<br />答：<a
                href="/help/live-guifan"
                >点击查看龙牙直播规范 </a
              >,
              若违反以上条例，将进行相应处理，请调整直播内容后再开播，若需咨询，请联系客服。
            </li>
            <li>
              问：为什么粉丝听不见我说话？<br />答：请您检查一下麦克风链接是否完好，确认完好之后检查下设置。
            </li>
            <li>
              问：如何禁言？<br />答：主播/房管在直播间弹幕区点击用户的昵称即可设置禁言
            </li>
            <li>
              问：如何设置房管？<br />答：在您直播间弹幕区点击用户昵称即可设置房管即可，在线观众列表点击用户的昵称进行设置房管。
            </li>
            <li>
              问：直播没人互动怎么办？<br />答：1.把您的直播间分享到微信/微博/QQ，邀请更多好友观看
              2.丰富您的直播内容，工作人员会随时查看，若直播内容优质将把您的直播间移至推荐位。
            </li>
            <li>
              问：收到的礼物怎么兑换？<br />答：个人中心绑定银行卡提现，点击【个人中心-提现】可进行提现。
            </li>
            <li>
              问：为什么我提现还没有到账？<br />答：1.检查您的银行卡号信息是否正确，若有错误，请下月兑换日期间（9号-25号）修改
              2.提现成功之后次月25日到账，如果您绑定的银行卡信息无误请您耐心等待即可。
            </li>
            <li>
              问：绑定了银行卡想要修改怎么办？<br />答：在兑换日（每月9号-25号），在【个人中心-收益记录-收款信息】处可修改银行卡信息。
            </li>
            <li>
              问：礼物收益怎么扣税？<br />答：当主播提现金额达到800元以上时，需要扣税。将按照国家税法规定，根据主播实际提现金额扣除对应税费，具体扣税规定请搜索相关法规。查看<a
                href="http://www.gov.cn/flfg/2011-07/27/content_1914833.htm"
                target="_blank"
                >国税总局规定</a
              >、<a
                href="http://www.hnds.gov.cn/taxcalculate/reward.html"
                target="_blank"
                >点击在线算税</a
              >
            </li>
            <li>
              问：收益与收到的礼物金额为什么不一致？<br />答：IOS和华为客户端充值用户赠送的礼物将扣除渠道抽取的30%手续费（礼物原基础上；且根据政策要求已扣除增值税。
            </li>
          </ul>
          <div class="go-feedback-box">
            <a href="/help/feedback">其它问题反馈 &gt;</a>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="直播规范" name="third">
        <div class="protocol">
          <p style="font-size: 20px">
            <span
              >&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 龙牙直播规范</span
            >
          </p>

          <p style="font-size: 18px"><span>一、概述：</span></p>
          <p style="font-size: 14px">
            <span
              >为保证龙牙直播合法规范，文明有序，特制定【龙牙直播主播规范手册】（以下简称“本手册”）。本手册包含龙牙直播准则、直播头像、直播标题、主播昵称、直播画面、处罚措施。请主播认真阅读本手册并按照本手册进行自查、整改和规范操作。平台会对主播执行本手册的情况进行严格监管，对违反本手册的行为采取相应的处罚措施。除非本手册另有特别说明，本手册适用于平台所有主播。本手册自在平台公布之日起生效实施。</span
            >
          </p>
          <p style="font-size: 14px"></p>
          <p style="font-size: 18px"><span>二、准则</span></p>
          <p style="font-size: 14px">
            <span
              >1、直播需固定镜头、直视镜头、保持上半身全脸出镜（男主播无需露脸）。</span
            >
          </p>
          <p style="font-size: 14px">
            <span>2、直播需全程带妆、禁止素颜出镜直播（男主播无需露脸）。</span>
          </p>
          <p style="font-size: 14px">
            <span
              >3、严禁在直播中喝酒、抽烟、吸毒等不良行为
              给予警告一次，多次违规或严重影响平台运营者直接淘汰关停直播间并扣除当月所有直播场次收益</span
            >
          </p>
          <p style="font-size: 14px">
            <span>4、严禁将账号供他人直播，一经发现替播，永久关停直播间。</span>
          </p>
          <p style="font-size: 14px">
            <span
              >5、严禁直播间涉黄、赌、毒，一经发现，直播账号永久关停，扣除全部收益。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >6、严禁在直播间以语音、文字、图片等形式宣传其他直播平台；严禁引导用户、主播去往其他平台，经发现扣除全部收益，永久关停直播账号。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >7、严禁以任何形式攻击、恶意禁言、侮辱用户，经发现将封禁账号并扣除全部收益。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >8、严禁恶意辱骂其他主播、官方工作人员，经发现停播3日进行自我整改。&nbsp;
            </span>
          </p>

          <p style="font-size: 18px"><span>三、主播违规类型定义</span></p>
          <p style="font-size: 14px"><span>1、基本守则：</span></p>
          <p style="font-size: 14px">
            <span
              >1.1
              龙牙体育主播必需遵守以下规定，否则将受到处罚，违规的情节严重程度是龙牙体育官方依据违规意图、违规时间和违规主体等客观因素来进行综合评定的。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >1.2龙牙体育主播有义务保证直播环境健康有序，主播需对直播间所有信息内容负责，若以上部分有违规行为，龙牙体育官方将依据违规情况，处罚违规者的同时，连带处罚主播。</span
            >
          </p>
          <p style="font-size: 14px"><span>2、严禁主播有以下行为：</span></p>
          <p style="font-size: 14px">
            <span
              >1、严禁发布违反国家法律法规、反党反政府，带有侮辱诋毁党和国家的内容，包括但不限于下列内容：</span
            >
          </p>
          <p style="font-size: 14px">
            <span>1) 反对宪法所确定的基本原则；</span>
          </p>
          <p style="font-size: 14px">
            <span
              >2) 危害国家安全、泄漏国家秘密、颠覆国家政权、破坏国家統一；</span
            >
          </p>
          <p style="font-size: 14px"><span>3) 损害国家荣誉和利益；</span></p>
          <p style="font-size: 14px">
            <span>4) 煽动民族仇恨、民族歧视,破坏民族团结；</span>
          </p>
          <p style="font-size: 14px">
            <span>5) 破坏国家宗教政策,宣扬邪教和封建迷信；</span>
          </p>
          <p style="font-size: 14px">
            <span>6) 散布谣言、扰乱社会秩序,破坏社会稳定；</span>
          </p>
          <p style="font-size: 14px">
            <span>7) 煽动非法集合、游行、示威、聚众扰乱社会秩序；</span>
          </p>
          <p style="font-size: 14px">
            <span>8) 散布淫秽、色情、赌博、暴力、凶杀、恐怖或教唆犯罪；</span>
          </p>
          <p style="font-size: 14px">
            <span>9) 侮辱或者诽谤他人、侵害他人合法权益；</span>
          </p>
          <p style="font-size: 14px">
            <span>10) 含有法律、政治法规禁止的其他内容。</span>
          </p>
          <p style="font-size: 14px">
            <span
              >2、严禁发布任何带有色情、涉黄擦边、引起他人性欲、低级趣味的內容，包括但不限下列内容：</span
            >
          </p>
          <p style="font-size: 14px"><span>1) 暴露隐私部位的照片；</span></p>
          <p style="font-size: 14px">
            <span>2) 过于裸露的图片，气氛低俗但不露点；</span>
          </p>
          <p style="font-size: 14px"><span>3) 过于低俗的不雅动作；</span></p>
          <p style="font-size: 14px">
            <span>4) 引起他人性欲或其他涉黄的内容。</span>
          </p>
          <p style="font-size: 14px">
            <span
              >3、严禁发布以售卖，销售为主要目的恶意广告内容，包括但不限于下列内容：</span
            >
          </p>
          <p style="font-size: 14px">
            <span>1) 发布涉及色情，诈骗等违法国家法律法规的广告内容；</span>
          </p>
          <p style="font-size: 14px">
            <span>2) 发布以售卖，推销为主要目的的恶意广告内容；</span>
          </p>
          <p style="font-size: 14px">
            <span
              >3)
              发布带有其他网站或APP宣传标识（包括logo、地址等），足球、篮球和电竞频道播放直播或录播内容禁止出现任何联系方式（包括手机号、微信号、QQ号、二维码、公众号、微博等）。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >4、严禁发布违反平台其他规范要求的内容，包括但不限于下列内容：</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >1)
              展示令人不安的血腥场景及使用枪支刀具等危害人身安全的内容；</span
            >
          </p>
          <p style="font-size: 14px">
            <span>2) 展示涉及透漏隐私信息的正规证件及其他物品；</span>
          </p>
          <p style="font-size: 14px"><span>3) 宣传竞争平台；</span></p>
          <p style="font-size: 14px">
            <span>4) 其他涉及违法、涉政、色情、低俗等威胁生命健康的图片；</span>
          </p>
          <p style="font-size: 14px">
            <span>5) 使用国家领导人及政府官员图片；</span>
          </p>
          <p style="font-size: 14px"><span>6) 使用未成年人图片。</span></p>
          <p style="font-size: 14px">
            <span
              >5、头像均需为主播本人真实照片或清晰的体育明星人物照片，禁止纯色画面、天花板、地面、床、被子、键盘桌面、纯文字、动物图片等无意义的低质画面</span
            >
          </p>
          <p style="font-size: 14px"><span>3、衣着规则</span></p>
          <p style="font-size: 14px"><span>1、根据场景选择着装；</span></p>
          <p style="font-size: 14px">
            <span
              >2、衣服字样和图样不得违法违规,不得含有粗言秽语,不得含有黄赌毒等直接或间接暗示；</span
            >
          </p>
          <p style="font-size: 14px"><span>4、合规头像示范</span></p>
          <p style="font-size: 14px"><span>1、图片为正方形；</span></p>
          <p style="font-size: 14px">
            <span>2、个人写真照为佳，要求颜值高、背景干净清晰度高。</span>
          </p>
          <p style="font-size: 14px"><span>3、不符合质量要求</span></p>
          <p style="font-size: 14px">
            <span>1) 封面模糊、变形、背景杂乱</span>
          </p>
          <p style="font-size: 14px"><span>2) 过度PS、特殊处理。</span></p>
          <p style="font-size: 14px"><span>4、违法，涉政</span></p>
          <p style="font-size: 14px">
            <span
              >1)
              黄、赌、毒以及低俗不雅照，包括且不限于：抽烟、饮酒、暴力、大尺度照片等；</span
            >
          </p>
          <p style="font-size: 14px">
            <span>2) 上传政治相关内容（包括背景着装标语等）</span>
          </p>
          <p style="font-size: 14px"></p>
          <p style="font-size: 18px"><span>四、标题</span></p>
          <p style="font-size: 14px">
            <span>1、开播选择相对应的比赛场次选定标题；</span>
          </p>
          <p style="font-size: 14px"><span>2、禁止违法涉政；</span></p>
          <p style="font-size: 14px">
            <span>3、禁止完全用表情代替文字。</span>
          </p>
          <p style="font-size: 14px">
            <span>正确示范：美乙：纽约红牛后备队vs北卡罗莱纳</span>
          </p>
          <p style="font-size: 14px">
            <span>错误示范：纽约红牛后备队V北卡罗莱纳</span>
          </p>
          <p style="font-size: 14px"></p>
          <p style="font-size: 18px"><span>五、昵称</span></p>
          <p style="font-size: 14px"><span>1、禁止昵称违法涉政。</span></p>
          <p style="font-size: 14px"><span>2、禁止完全用表情代替文字</span></p>
          <p style="font-size: 14px"><span>正确示范：老王说球</span></p>
          <p style="font-size: 14px"><span>错误示范：党委书记聊球</span></p>
          <p style="font-size: 14px"></p>
          <p style="font-size: 18px"><span>六、直播画面</span></p>
          <p style="font-size: 16px"><span>一、正确示范</span></p>
          <p style="font-size: 14px">
            <span
              >1、背景干净整洁，直播画面清晰，光照自然明亮，镜头稳定不晃动；</span
            >
          </p>
          <p style="font-size: 14px">
            <span>2、日常直播时腰部以上出现，正面平视摄像头； </span>
          </p>
          <p style="font-size: 14px"></p>
          <p style="font-size: 16px"><span>二、错误示范</span></p>
          <p style="font-size: 14px"><span>1、面部占据全部直播画面；</span></p>
          <p style="font-size: 14px">
            <span>2、面部不完全出现在直播画面中，如露半脸顶在画面外等；</span>
          </p>
          <p style="font-size: 14px"><span>3、挑逗动作明显;</span></p>
          <p style="font-size: 14px">
            <span>4、消极直播，无互动、素颜邋遢、做与直播无关事情。</span>
          </p>
          <p style="font-size: 18px"></p>
          <p style="font-size: 18px"><span>七、处罚措施</span></p>
          <p style="font-size: 14px"><span>处罚措施的分类说明</span></p>
          <p style="font-size: 14px">
            <span
              >1、若主播出现违规行为，一经认定，视情节严重程度进行处罚。分为：</span
            >
          </p>
          <p style="font-size: 14px"><span>严重违规（A类违规）</span></p>
          <p style="font-size: 14px"><span>一般违规（B类违规）</span></p>
          <p style="font-size: 14px"><span>轻微违规（C类违规）</span></p>
          <p style="font-size: 14px"><span>2、违规处罚规则：</span></p>
          <p style="font-size: 14px">
            <span
              >2.1
              A类处罚：立即停止直播权限，限制手机号开播，限制设备开播功能，扣除当月100%佣金等处罚，保留移交司法机关的权利。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >2.2
              B、C类处罚：依据情况及违规次数进行警告、扣除佣金、中断直播、限制直播功能等处罚。</span
            >
          </p>

          <p style="font-size: 20px"><span>特 别 声 明</span></p>
          <p style="font-size: 14px">
            <span
              >1、本协议构成双方对本协议之约定事项及其他有关事宜的完整协议，除本协议规定的之外，未赋予本协议各方其他权利。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >2、如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >3、龙牙体育直播平台有权不定期增加或删减此主播直播规范内容，一切解释权归龙牙体育平台所有。
            </span>
          </p>
          <p style="font-size: 14px"><span>&nbsp;&nbsp; </span></p>
          <p style="font-size: 14px">
            <span>&nbsp;以上内容如有疑问，请及时联系龙牙体育官方在线客服 </span>
          </p>

          <p style="font-size: 20px">
            <span
              >&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp; 龙牙直播</span
            >
          </p>
          <p style="font-size: 20px">
            <span
              >&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; 2021.4.15</span
            >
          </p>
          <p style="font-size: 20px"></p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="直播协议" name="fourth">
        <div class="protocol">
          <p style="font-size: 20px">
            <span
              >&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 龙牙体育直播协议</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >《龙牙体育直播协议》，是海南龙牙网络科技有限公司
              （以下简称“甲方”）和乙方（乙方为自然人、法人或其他组织）所约定的规范双方权利和义务的具有法律效力的电子协议，下称“本协议”。乙方勾选“我同意”或点击“我已阅读并遵守该协议”按钮，即表示乙方已经仔细阅读、充分理解并完全地毫无保留地接受本协议的所有条款。</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 18px"><span>第一条 总则</span></p>
          <p style="font-size: 14px">
            <span
              >1、龙牙体育平台是指由海南龙牙网络科技有限公司
              及其关联公司，包括但不限于我公司自有在线解说平台。乙方根据甲方注册要求及规则，在甲方合法经营的龙牙体育直播平台（以下简称“平台”）上申请成为甲方的直播服务提供方（或称“直播方”），为甲方平台用户提供在线解说（本协议项下“解说”均亦指“直播”）视频内容的直播服务，乙方在甲方平台提供服务期间均应视为协议期内。甲方不事先审核前述被上载的、由乙方参与、编辑、制作的视频内容，也不主动对该等视频进行任何编辑、整理、修改、加工。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >2、签署本协议前，乙方已充分了解甲方各项规则及要求，且有条件及有能力、资格履行本协议约定的直播方职责及义务。本协议对乙方构成有效的、带有约束力的、可强制执行的法定义务，乙方对本协议下所有条款及定义等内容均已明确知悉，并无疑义。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >3、乙方承诺并声明在为甲方提供服务时符合所在地法律的相关规定，不得以履行本协议名义从事其他违反中国及所在地法律规定的行为。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >4、乙方与甲方不构成任何劳动法律层面的雇佣、劳动、劳务关系，甲方无需向乙方支付社会保险金和福利。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >5、未经甲方事先书面同意，乙方不得在第三方竞争平台上从事任何与解说相关的行为（包括但不限于：视频直播互动、同步推流、发布解说视频或其余类似行为）。前述第三方竞争平台指：与甲方及甲方关联公司有竞争关系的第三方直播平台，包括但不限于虎牙直播、企鹅直播、虎扑体育、火猫直播、风云直播、播狗、新浪游戏、QT、17173、PPTV、TGA、AZUBU、TWITCH等及其相关联的直播网站。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >6、乙方在注册成为龙牙体育主播或在龙牙体育平台进行直播服务前已确认，未与任何第三方平台签署或存在有效存续的独家直播解说协议。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >7、在双方合作期间，乙方直播、上传、发布或传输等内容的相关权利，适用于《龙牙体育直播内容管理规定》中条款的约定。</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 18px"><span>第二条 甲方权利义务</span></p>
          <p style="font-size: 14px">
            <span
              >1、甲方有权制定平台运营制度及对直播方的管理规则，并将其作为本协议的一部分，有权对乙方进行管理和监督，有权根据运营情况对相应规则做出调整或变更，乙方对此表示理解和同意。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >2、甲方有权对乙方进行考察、评判，以确立（取消）对乙方的奖励或处罚，具体考察项目及标准由甲方另行制定，无需额外征得乙方同意。如甲方要求与乙方另行签订正式的解说合作协议的，乙方不得拒绝或以其他形式变相拒绝签订【否则乙方应一次性向甲方支付违约金【50000】（大写：伍万）元】。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >3、甲方有权对乙方的直播服务提出改进建议和意见，乙方应在收到甲方的建议和意见后【3】个工作日内进行相应的整改，否则甲方有权限制、关闭、回收、或终止乙方对龙牙体育直播间的使用，相应扣减应支付给乙方的服务费用（若有）可能会给乙方造成一定的损失，该损失由乙方自行承担，甲方不承担任何责任。</span
            >
          </p>
          <p style="font-size: 14px">
            <span>4、甲方对乙方进行的解说直播相关事宜拥有最终决定权。</span>
          </p>
          <p style="font-size: 14px">
            <span
              >5、甲方有权使用乙方的名称（包括但不限于乙方真实姓名、笔名、网名、曾用名及任何代表乙方身份的文字符号）、肖像（包括但不限于真人肖像及卡通肖像等）进行甲方平台的各类宣传。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >6、甲方负责提供平台技术服务支持，同时负责平台服务费用结算（若有）。</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 18px"><span>第三条 乙方权利义务</span></p>
          <p style="font-size: 14px">
            <span
              >1、乙方应当使用真实身份信息及个人资料，不得以虚假、冒用的居民身份信息、企业注册信息、组织机构代码信息进行注册并认证。若乙方的个人资料有任何变动，应及时更新。甲方禁止未成年人直播，若法定监护人希望未成年人得以提供本协议约定的网络直播及解说服务的，必须以法定监护人身份加以判断该等服务内容是否适合于未成年人，并由法定监护人承担因此而导致的一切后果。乙方承诺不会因执行本协议损害任何第三方合法利益，乙方接受并履行本协议不违反任何对你有约束力的法律文件，亦不会使甲方对任何第三方承担责任。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >2、乙方自己承担进行解说直播所需要的网络、支持视频和语音的设备，并保证直播图像清、语音质量清晰、稳定。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >3、乙方承诺，愿意遵照平台设定的直播间申请程序，提交平台所需的申请材料并自愿缴付相应的保证金。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >4、乙方承诺直播房间必须作解说直播用途，不得用于其他任何非解说直播性质的活动。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >5、乙方开展本协议项下解说直播事项和/或在本平台上发布的所有信息/资讯/言论/内容等均不得含有任何违反中华人民共和国有关法律、法规及规定的内容，包括但不限于危害国家安全、淫秽色情、虚假、违法、诽谤（包括商业诽谤）、非法恐吓或非法骚扰、侵犯他人知识产权、人身权、商业秘密或其他合法权益以及有违公序良俗的内容或指向这些内容的链接。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >6、乙方承诺积极维护甲方及甲方平台形象，乙方不会做出有损于甲方及/或甲方平台形象或利益的行为，本协议期内及协议终止后，乙方不会通过任何渠道（包括但不限于网站、博客、微博、微信、QQ聊天群、玩家聚会等）暗示或发布不利于甲方及/或甲方平台的言论。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >7、未经甲方书面同意，乙方不得在任何场合以任何形式（包括但不限于文字、口播、视频贴片等）提及第三方竞争平台的相关信息，不得引导或为甲方平台现有用户、其他直播方及甲方员工进入其他第三方竞争平台提供任何信息或便利，包括但不限于提供联络上的协助、进行说服工作等。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >8、您特此陈述并保证：(1）您当前并未在受美国制裁国家或地区（包括但不限于克里米亚、古巴、伊朗、北朝鲜、及叙利亚）居住或停留；(2）您并不属于美国政府禁止或限制主体名单（包括美国财政部海外资产办公室管理的《特别指定国民名单》Specially</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >Designated Nationals and Blocked Persons
              List）的主体或人员；(3）您并不属于其他任何遭受美国或联合国经济制裁名单主体或人员，该等名单包括但不限于a）《行业制裁识别名单》Sectoral</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >Sanctions Identifications List；b)《海外逃避制裁者名单》 Foreign
              Sanctions Evaders List；c)《巴勒斯坦立法会名单》NON-SDN
              Palestinian Legislative</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >Council List；d)《非SDN涉伊朗制裁法案名单》Non-SDN Iran Sanctions
              Act List等。</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 18px"><span>第四条 服务费用及结算</span></p>
          <p style="font-size: 14px">
            <span
              >1、以乙方为平台用户提供解说直播服务为前提，用户可对乙方进行赠送虚拟礼物的消费，乙方可根据甲方的结算要求及规则申请结算相应的服务费用（若有）。甲方就乙方收到的每笔虚拟礼物以数量为计价单位，且以一定的比例为价值基准进行兑换结算，作为支付给乙方的服务费用。对于非正常手段获得的虚拟礼物消费，甲方有权进行独立判断和处理。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >2、乙方所获得的服务费用应当依据国家相关法律法规缴纳税金，甲方将乙方所获得的服务费用支付于乙方在用户中心中填写的银行账户中，乙方可在登陆甲方平台后在个人中心-主播相关-收益记录中查询相关信息（结算数据为含税数据）。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >3、若乙方为自然人，并在甲方平台注册并通过个人认证的，则甲方有权将乙方所获得的服务费用支付于乙方在用户中心填写的个人银行账户中；若乙方为法人或其他组织，并在甲方平台注册且通过机构认证的，则甲方有权将乙方所获得服务费用支付于乙方在机构认证页面填写的机构账户中，但乙方应当在甲方付款前5个工作日内向甲方提供等额有效的增值税专用发票（发票名目为直播服务费），因乙方延迟提供发票导致甲方付款延迟的，不构成甲方违约。甲方按照乙方填写的账户支付服务费用，即视为甲方已经履行了本协议约定的付款义务。若乙方为法人或其他组织的，乙方工作人员或旗下主播因管理及运营该帐号及其直播房间产生的费用，由乙方与乙方工作人员或旗下主播之间自行结算。若乙方因该费用结算而引起纠纷、诉讼或赔偿给甲方造成损失的（包括但不限于乙方拖欠乙方工作人员或旗下主播薪资费用时甲方先行垫付其薪资的款项），甲方有权在应付服务费用中先行扣除，不足部分甲方有权向乙方追偿。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >4、乙方保证填写账户信息正确、真实、有效，如因账户信息造成甲方的任何支付错误，由乙方独自承担责任。同时，若乙方需要变更帐户信息，需及时书面通知甲方，新账户信息由乙方提交申请且经甲方审核通过后下一个结算月生效。</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 18px"><span>第五条 保密制度</span></p>
          <p style="font-size: 14px">
            <span
              >1、乙方应严格遵守甲方的保密制度，承诺无限期保守甲方的商业秘密。因乙方违反约定使用或披露甲方商业秘密和信息使甲方遭受任何名誉、声誉或经济上的、直接或间接的损失，乙方应赔偿甲方人民币[
              100000 ]元违约金，补足以弥补甲方损失，乙</span
            >
          </p>
          <p style="font-size: 14px"><span>方还应赔偿甲方损失。</span></p>
          <p style="font-size: 14px">
            <span
              >2、商业秘密是指由甲方提供的、或者乙方在双方合作期间了解到的、或者甲方对第三方承担保密义务的，与甲方业务有关的，能为甲方带来经济利益，具有实用性的、非公知的所有信息，包括（但不限于）：技术信息、经营信息和与甲方行政管理有关的信息和文件（含本协议及相关协议内容）、乙方从甲方获得的服务费用的金额和结算方式、标准、权利归属方式、授权方式、客户名单、其他解说员的名单、联系方式、服务费用、甲方工作人员名单等不为公众所知悉的信息。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >3、乙方应严格遵守本协议，未经甲方书面授权或同意，对甲方的商业秘密不得：</span
            >
          </p>
          <p style="font-size: 14px">
            <span>（1）以任何方式向第三方或不特定的公众进行传播、泄露；</span>
          </p>
          <p style="font-size: 14px">
            <span>（2）为非本协议的目的而使用甲方的商业秘密。</span>
          </p>
          <p style="font-size: 14px">
            <span
              >4、本协议终止后，乙方应将甲方商业秘密悉数返还甲方，或在甲方监督下，将记载甲方商业秘密的全部文件销毁。</span
            >
          </p>
          <p style="font-size: 14px">
            <span>5、本条规定在本协议终止后仍然有效。</span>
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 18px">
            <span>第六条 协议的变更、解除、终止</span>
          </p>
          <p style="font-size: 14px">
            <span
              >1、甲方有权在必要时变更、中止、终止本协议，并在相关页面进行通知，变更后的协议一旦在相关的页面上公布即有效代替原来的协议。本协议条款变更后，如乙方继续为甲方平台用户提供解说等直播服务，即视为乙方已知悉并接受变更后的协议。如乙方不同意甲方对本协议的所作的任何变更，乙方应立即书面通知甲方并停止在甲方平台进行的任何直播服务。</span
            >
          </p>
          <p style="font-size: 14px">
            <span>2、双方就解除本协议协商一致即可终止协议。</span>
          </p>
          <p style="font-size: 14px">
            <span
              >3、乙方有下列情形之一，甲方可以立即解除本协议，不需要提前通知：</span
            >
          </p>
          <p style="font-size: 14px">
            <span>（1）甲方发现乙方违反对本协议所做的声明与承诺的；</span>
          </p>
          <p style="font-size: 14px">
            <span>（2）因乙方行为直接或间接给对甲方利益造成重大损害的；</span>
          </p>
          <p style="font-size: 14px"><span>（3）违反国家法律法规的；</span></p>
          <p style="font-size: 14px">
            <span>（4）违反本协议规定的其它义务；</span>
          </p>
          <p style="font-size: 14px">
            <span
              >（5）以消极、不作为等不符合甲方要求的方式履行本协议的（即使未构成违约），经甲方通知后10日内仍未改正的；</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >（6）因异常情形的出现，甲方认为乙方不适合进行本协议下服务事项，经甲方通知后10日内异常情形仍未消除的；</span
            >
          </p>
          <p style="font-size: 14px">
            <span>（7）因甲方业务调整，不再进行直播服务业务的。</span>
          </p>
          <p style="font-size: 14px">
            <span
              >4、由于本协议第六条第1、2款造成的协议解除、终止，甲方按本协议第四条规定及甲方平台实时政策约定与乙方结算服务费用。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >5、由于本协议第六条第3款造成的协议解除、终止，甲方有权扣除乙方帐号中尚未结算的全部服务费用，并有权要求乙方按约定承担违约责任。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >6、本协议终止后，不影响本协议约定的直播方成果的权利归属，甲方仍为本协议所涉直播方成果的权利人；如果根据中国法律，上述之约定无法实际履行的，乙方同意并承诺自本协议终止或双方后续合作中止、终止或解除之日起五年内不将直播方成果的全部或部分的发布、使用等相关的权利（包括但不限于《中华人民共和国著作权法》第十条第一款第（五）项至第（十七）项规定的著作权权利）自行行使、转让或授权许可于任何第三方。</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 18px"><span>第七条 违约责任</span></p>
          <p style="font-size: 14px">
            <span
              >1、任何由于乙方声明不实或违反其声明承诺事项导致他方向甲方提起诉讼、索赔及/或导致甲方声誉受损之后果，乙方将承担甲方因此产生的全部直接及间接费用、损失及赔偿，其中包括甲方为诉讼支付的有关费用及律师费。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >2、除本协议另有约定外，乙方违反本协议下任何规定或乙方提供的服务不符合甲方的要求，甲方有权单方面采取相应限制或处罚措施，包括但不限于：限制、关闭、回收、或终止乙方对龙牙体育直播间的使用，限制或停止某项单独服务（如视频直播）并根据实际情况决定是否恢复使用，扣除乙方帐号中尚未结算的服务费用。</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 18px"><span>第八条 争议处理</span></p>
          <p style="font-size: 14px">
            <span
              >因履行本协议而产生的任何争议，双方均应本着友好协商的原则加以解决。协商解决未果，任何一方均可以提请广西壮族自治区人民法院诉讼解决</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="stylus" >
#about-Anchor {
  width: 100%;
  background-color: #fff;

  .el-tabs__active-bar {
    background-color: #dbb16f;
  }

  .el-tabs__item {
    color: #666666;
  }

  .is-top {
    .el-tabs__nav-scroll {
      margin-left: 20px;
    }
  }

  .el-tabs__item.is-active {
    color: #333333;
    font-weight: 600;
  }

  .el-table td, .el-table th {
    padding: 8px 0;
  }

  .el-tabs__header {
    margin: 0;
  }

  .Account {
    height: 780px;
    overflow: hidden;
    overflow-y: scroll;
    padding: 20px;

    a {
      color: #0000ee !important;
    }

    p {
      list-style: none;
      line-height: 30px;
      font-size: 14px;
      padding: 30px;
      padding: 10px 0;
    }
  }

  .content-box {
    height: 900px;
    overflow: hidden;
    overflow-y: scroll;
    margin: 0;
    padding: 0 20px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    --antd-wave-shadow-color: #d8ad66;
    --scroll-bar: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    font-feature-settings: 'tnum', 'tnum';
    font-family: 'Microsoft Yahei', 'PingFang SC', 'Avenir', 'Segoe UI', 'Hiragino Sans GB', STHeiti, 'Microsoft Sans Serif', 'WenQuanYi Micro Hei', sans-serif;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    border: none;
    // margin-top: 20px;
    position: relative;

    li {
      list-style: none;
      line-height: 40px;
      font-size: 14px;
      padding: 15px 0;
      border-bottom: 1px solid #999;
    }
  }

  .protocol {
    margin: 0;
    padding: 0 20px;
  }

  .Watch {
    margin: 0;
    padding: 0 20px;

    p {
      list-style: none;
      line-height: 30px;
      font-size: 14px;
      padding: 10px 0;
    }
  }

  .protocol {
    padding: 0 20px;
    height: 900px;
    overflow: hidden;
    overflow-y: scroll;
  }

  p {
    font-family: Helvetica, arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: white;
    padding: 8px;
  }
}
</style>