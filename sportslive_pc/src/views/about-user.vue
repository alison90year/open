<template>
  <div id="about-user">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="账号问题" name="first">
        <div class="Account">
          <p>
            问：登陆失败怎么办？
            <br />
            答：尝试退出或刷新页面后重新登录。如还是无法登入，联系客服QQ:123456。
          </p>
          <p>
            问：为什么我的账号被封禁了？
            <br />
            答：点击查看龙牙直播弹幕规范
            若违反弹幕规范条例，将进行封禁处理；若需申诉，请联系客服，并提供龙牙昵称、绑定的手机号。
          </p>
          <p>
            问：怎么注册新账号？
            <br />
            答：目前仅支持手机号码直接登陆注册。
          </p>
          <p>
            问：如何更换手机号？
            <br />
            答：进入【个人中心-我的资料-修改手机号】。
          </p>
          <p>
            问：账号如何注销？
            <br />
            答：账号不能注销。
          </p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="充值問題" name="second">
        <dir class="Recharge">
          <p>
            问：龙牙有哪些充值方式？
            <br />
            答：1.安卓客户端可使用支付宝和微信充值，苹果客户端需使用苹果账户进行充值
          </p>
          <p>
            问：充值未到账怎么办？
            <br />
            答：苹果客户端请确认是否充值到“苹果账户”上；如确认已充值到龙牙账户上却未到账，请联系客服QQ：123456，并提供以下资料，以便我们尽快核实处理：
            <br />
            1. 龙牙昵称
            <br />
            2.“我的”页面截图
            <br />
            3. 充值订单截图（IOS用户提供AppStore充值订单邮件截图）
            <br />
            4. 龙牙APP版本号（【我的-设置-关于我们-版本信息】处查看）
          </p>
          <p>
            问：怎么注册新账号？
            <br />
            答：目前仅支持手机号码直接登陆注册。
          </p>
          <p>
            问：如何更换手机号？
            <br />
            答：进入【个人中心-我的资料-修改手机号】。
          </p>
          <p>
            问：账号如何注销？
            <br />
            答：账号不能注销。
          </p>
        </dir>
      </el-tab-pane>
      <el-tab-pane label="觀看問題" name="third">
        <div class="Watch">
          <p>
            问：播放器无法自动播放？
            <br />
            答：由于隐私保护浏览器禁止自动播放带声音视频，需要用户授权才能自动播放
            <br />
            1.Chrome: chrome://settings/content/siteDetails 权限-声音
            选项设置允许
            <br />
            2.Microsoft Edge(chromium): edge://settings/content/mediaAutoplay
            控制是否自动播放网站上的音频及视频 设置允许
            <br />
            3.Firefox: about:preferences#privacy 权限-自动播放 设置允许音视频
            <br />
            4.Safari: 此网站的设置-自动播放-允许全部自动播放
          </p>
          <p>
            问：为什么我发不了/看不到弹幕？
            答：请先确认是否所有的直播间均无法连接，再联系客服，并提供以下资料：
            1.线路截图点击查看线路 2.无法看弹幕的页面截图
          </p>
          <p>
            问：观看直播没有画面怎么办？
            答：请先确认是否所有的直播间均无法观看，再联系客服，并提供以下资料：
            1.网速测试截图点击测试网速 2.线路截图点击查看线路
            3.无法观看直播的页面截图
          </p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="用戶協議" name="fourth">
        <div class="protocol">
          <p style="font-size: 14px">
            <span
              >&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; </span
            ><span style="font-size: 20px; font-weight: 600">
              龙牙用户服务协议</span
            >
          </p>
          <p style="font-size: 14px"><span>欢迎您使用龙牙及服务！</span></p>
          <p style="font-size: 14px">
            <span
              >请务必在使用龙牙服务前认真阅读和理解《龙牙用户服务协议》(以下简称“本协议”)，特别是免除或者限制龙牙公司责任的免责条款及对用户的权利限制
              条款。您接受本协议条款，否则您将无权下载、安装或使用龙牙及其相关服务。您的下载、安装或其他使用行为，将视为对本协议的接受，并同意接受各项条款的
              约束。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >本协议是您与龙牙公司之间关于您下载、安装、使用龙牙，以及使用龙牙公司相关服务所订立的协议。“用户”或“您”是指通过龙牙公司提供的获取龙牙授权的途径获得龙牙授权许可和/或龙牙产品服务的个人或单一实体。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >龙牙公司有权随时根据有关法律法规的变化、公司经营状况、经营策略调整和龙牙网站/软件升级等原因修订本协议。更新后的协议条款将会在龙牙官方网站
              上或龙牙软件上公布，公布即有效代替原来的协议条款，用户可随时登陆龙牙网站和/或使用龙牙软件查阅最新版协议条款。如果用户不同意协议改动内容，
              请立即停止使用龙牙网站和/或龙牙软件。如果用户继续使用龙牙，则视为接受本协议的改动。</span
            >
          </p>
          <p style="font-size: 14px">
            <span>未满18周岁的未成年人应在法定监护人陪同下阅读本协议。</span>
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 20px"><span>一、服务内容及使用须知</span></p>
          <p style="font-size: 14px">
            <span
              >1、用户在使用龙牙服务时，必须遵守《网络安全法》、《互联网新闻信息服务管理规定》及《互联网新闻信息服务管理规定实施细则》等中华人民共和国相关法律、法规、规章及政策性文件等的规定，用户应同意将不会利用本服务进行任何违法或不正当的活动。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >2、用户理解，龙牙仅提供相关的网络服务，除此之外与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均应由用户自行负担。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >3、用户不得滥用龙牙的服务，龙牙公司在此郑重提请您注意，任何经由本服务以接入、浏览、访问、传输即时信息、电子邮件或任何其他方式传输的资讯、资
              料、文字、软件、音乐、音讯、照片、图形、视讯、信息、用户的登记资料或其他资料（以下简称"内容"），无论系公开还是私下传输，均由内容提供者、使用者
              对其接入、浏览、访问、传输、使用行为自行承担责任。龙牙无法控制经由本服务传输之内容，也无法对用户的使用行为进行全面控制，因此不能保证内容的合法
              性、正确性、完整性、真实性或品质；您已预知使用本服务时，可能会接触到令人不快、不适当等内容，并同意将自行加以判断并承担所有风险，而不依赖于龙牙
              服务。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >4、若用户使用龙牙服务的行为不符合本协议，龙牙公司在经由通知、举报等途径发现时有权做出独立判断，且有权在无需事先通知用户的情况下立即终止向用
              户提供部分或全部服务。用户若通过龙牙散布和传播反动、色情或其他违反国家法律、法规的信息，龙牙的系统记录有可能作为用户违反法律法规的证据；因用
              户进行上述内容在龙牙的接入、浏览、访问、传输等行为而导致任何第三方提出索赔要求或衍生的任何损害或损失，由用户自行承担全部责任。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >5、龙牙公司有权对用户使用龙牙服务的情况进行监督，如经由通知、举报等途径发现用户在使用龙牙所提供的网络服务时违反任何本协议的规定，龙牙公
              司有权要求用户改正或直接采取一切龙牙公司认为必要的措施（包括但不限于暂停或终止用户使用网络服务的权利）以减轻用户不当行为造成的影响。</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 20px"><span>二、所有权</span></p>
          <p style="font-size: 14px">
            <span
              >1、龙牙公司保留对以下各项内容、信息完全的、不可分割的所有权及知识产权：除用户自行上载、传播的内容外，龙牙及其所有元素，包括但不限于所有内容、数据、技术、软件、代码、用户界面以及与其相关的任何衍生作品。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >2、未经龙牙公司同意，上述资料均不得在任何媒体直接或间接发布、播放、出于播放或发布目的而改写或再发行，或者被用于其他任何商业目的。上述资料或其
              任何部分仅可作为私人用途而保存在某台计算机内。龙牙不就由上述资料产生或在传送或递交全部或部分上述资料过程中产生的延误、不准确、错误和遗漏或从中
              产生或由此产生的任何损害赔偿，以任何形式向用户或任何第三方负法律、经济责任。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >3、龙牙为提供网络服务而使用的任何软件（包括但不限于软件中所含的任何图像、照片、动画、录像、录音、音乐、文字和附加程序、随附的帮助材料）的一切权利均属于该软件的著作权人，未经该软件的著作权人许可，用户不得对该软件进行反向工程（reverse
              engineer）、反向编译（decompile）或反汇编（disassemble），或以其他方式发现其原始编码，以及实施任何涉嫌侵害著作权的行为。</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 20px"><span>三、承诺与保证</span></p>
          <p style="font-size: 14px">
            <span
              >1、用户保证，其在使用龙牙的过程中不得并禁止直接或间接的：</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >（1）删除、隐匿、改变龙牙上显示或其中包含的任何专利、版权、商标或其他所有权声明；</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >（2）以任何方式干扰或企图干扰龙牙或公司网站其任何部分或功能的正常运行；</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >（3）避开、尝试避开或声称能够避开任何内容保护机制或者龙牙数据度量工具；</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >（4）未获得龙牙公司事先书面同意以书面格式或图形方式使用源自龙牙公司的任何注册或未注册的商品、服务标志、公司徽标(LOGO)、URL或其他标志；</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >（5）使用任何标志，包括但不限于以对此类标志的所有者的权利的玷污、削弱和损害的方式使用龙牙公司标志，或者以违背本协议的方式为自己或向其他任何人设定或声明设定任何义务或授予任何权利或权限；</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >（6）未事先经过原始用户的同意向任何非原始用户显示或以其他方式提供任何用户信息；</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >（7）请求、收集、索取或以其他方式从任何用户那里获取对龙牙公司帐号、密码或其他身份验证凭据的访问权；</span
            >
          </p>
          <p style="font-size: 14px">
            <span>（8）为任何用户自动登录到龙牙公司账号代理身份验证凭据；</span>
          </p>
          <p style="font-size: 14px">
            <span
              >（9）提供跟踪功能，包括但不限于识别其他用户在个人主页上查看或操作；</span
            >
          </p>
          <p style="font-size: 14px">
            <span>（10）自动将浏览器窗口定向到其他网页；</span>
          </p>
          <p style="font-size: 14px">
            <span
              >（11）未经授权冒充他人或获取对龙牙的访问权；或者未经用户明确同意，让任何其他人亲自识别该用户；</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >（12）用户违反上述任何一款的保证，龙牙公司均有权就其情节，对其做出警告、屏蔽、直至取消资格的处罚；如因用户违反上述保证而给龙牙、龙牙用户或龙牙公司的任何合作伙伴造成损失，用户自行负责承担一切法律责任并赔偿损失。</span
            >
          </p>
          <p style="font-size: 14px"><span>2、用户的承诺：</span></p>
          <p style="font-size: 14px">
            <span
              >（1）用户利用龙牙提供的网络服务上传、发布、传送或通过其他方式传播的内容，不得含有任何违反国家法律法规政策的信息，包括但不限于下列信息：</span
            >
          </p>
          <p style="font-size: 14px">
            <span>(a) 反对宪法所确定的基本原则的；</span>
          </p>
          <p style="font-size: 14px">
            <span
              >(b)
              危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</span
            >
          </p>
          <p style="font-size: 14px">
            <span>(c) 损害国家荣誉和利益的；</span>
          </p>
          <p style="font-size: 14px">
            <span>(d) 煽动民族仇恨、民族歧视，破坏民族团结的；</span>
          </p>
          <p style="font-size: 14px">
            <span>(e) 破坏国家宗教政策，宣扬邪教和封建迷信的；</span>
          </p>
          <p style="font-size: 14px">
            <span>(f) 散布谣言，扰乱社会秩序，破坏社会稳定的；</span>
          </p>
          <p style="font-size: 14px">
            <span
              >(g) 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</span
            >
          </p>
          <p style="font-size: 14px">
            <span>(h) 侮辱或者诽谤他人，侵害他人合法权益的；</span>
          </p>
          <p style="font-size: 14px">
            <span>(i) 含有法律、行政法规禁止的其他内容的。</span>
          </p>
          <p style="font-size: 14px">
            <span
              >（2）用户不得为任何非法目的而使用本网络服务系统；不得以任何形式使用龙牙服务侵犯龙牙公司的商业利益，包括并不限于发布非经龙牙公司许可的商业广告；不得利用龙牙服务系统进行任何可能对互联网或移动网正常运转造成不利影响的行为。</span
            >
          </p>
          <p style="font-size: 14px">
            <span>（3）用户不得利用龙牙的服务从事以下活动：</span>
          </p>
          <p style="font-size: 14px">
            <span
              >(a)
              未经允许，进入计算机信息网络或者使用计算机信息网络资源的；</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >(b)
              未经允许，对计算机信息网络功能进行删除、修改或者增加的；</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >(c)
              未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加的；</span
            >
          </p>
          <p style="font-size: 14px">
            <span>(d) 故意制作、传播计算机病毒等破坏性程序的；</span>
          </p>
          <p style="font-size: 14px">
            <span>(e) 其他危害计算机信息网络安全的行为。</span>
          </p>
          <p style="font-size: 14px">
            <span
              >（4）如因用户利用龙牙提供的网络服务上传、发布、传送或通过其他方式传播的内容存在权利瑕疵或侵犯了第三方的合法权益（包括但不限于专利权、商标权、
              著作权及著作权邻接权、肖像权、隐私权、名誉权等）而导致龙牙公司或与龙牙公司合作的其他单位面临任何投诉、举报、质询、索赔、诉讼；或者使龙牙公
              司或者与龙牙公司合作的其他单位因此遭受任何名誉、声誉或者财产上的损失，用户应积极地采取一切可能采取的措施，以保证龙牙公司及与龙牙公司合作的
              其他单位免受上述索赔、诉讼的影响。同时用户对龙牙公司及与龙牙公司合作的其他单位因此遭受的直接及间接经济损失负有全部的损害赔偿责任。</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 20px"><span>四、知识产权保护</span></p>
          <p style="font-size: 14px">
            <span
              >如果用户上传的内容允许其他用户下载、查看、收听或以其他方式访问或分发，其必须保证该内容的发布和相关行为实施符合相关知识产权法律法规中相关的版权政策，包括但不限于：</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >1、用户在收到侵权通知之时，应立即删除或禁止访问声明的侵权内容，并同时联系递送通知的人员以了解详细信息。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >2、用户知悉并同意龙牙公司将根据相关法律法规对第三方发出的合格的侵权通知进行处理，并按照要求删除或禁止访问声明的侵权内容，采用并实施适当的政策，以期杜绝在相应条件下重复侵权。</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 20px"><span>五、隐私保护</span></p>
          <p style="font-size: 14px">
            <span
              >龙牙公司充分尊重用户个人信息的保护，龙牙的隐私权保护声明介绍了您在使用龙牙公司的服务时，龙牙公司如何处理您的个人信息。您使用龙牙公司的服务，即表示您同意龙牙公司可以按照隐私政策进行处理相应信息。</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 20px"><span>六、免责声明</span></p>
          <p style="font-size: 14px">
            <span
              >1、鉴于网络服务的特殊性，用户同意龙牙有权随时变更、中断或终止部分或全部的网络服务。如变更、中断或终止的网络服务属于免费网络服务，龙牙无需通知用户，也无需对任何用户或任何第三方承担任何责任。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >2、用户理解，龙牙需要定期或不定期地对提供网络服务的平台或相关的设备进行检测，龙牙公司无需为此承担任何责任，但龙牙应尽可能事先进行通告。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >3、龙牙可在任何时候为任何原因变更本服务或删除其部分功能。龙牙可在任何时候取消或终止对用户的服务。龙牙取消或终止服务的决定不需要理由或通知用户。一旦服务取消，用户使用本服务的权利立即终止。
              一旦本服务取消或终止，用户在本服务中储存的任何信息可能无法恢复。</span
            >
          </p>
          <p style="font-size: 14px">
            <span>4、龙牙不保证（包括但不限于）：</span>
          </p>
          <p style="font-size: 14px">
            <span>（1）龙牙适合用户的使用要求；</span>
          </p>
          <p style="font-size: 14px">
            <span
              >（2）龙牙不受干扰，及时、安全、可靠或不出现错误；及用户经由龙牙取得的任何产品、服务或其他材料符合用户的期望。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >（3）用户使用经由龙牙下载或取得的任何资料，其风险由用户自行承担；因该等使用导致用户电脑系统损坏或资料流失，用户应自己负完全责任；</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >5、基于以下原因而造成的利润、商业信誉、资料损失或其他有形或无形损失，龙牙公司不承担任何直接、间接的赔偿：</span
            >
          </p>
          <p style="font-size: 14px">
            <span>（1）对龙牙的使用或无法使用；</span>
          </p>
          <p style="font-size: 14px">
            <span>（2）经由龙牙购买或取得的任何产品、资料或服务；</span>
          </p>
          <p style="font-size: 14px">
            <span
              >（3）用户资料遭到未授权的使用或修改；及其他与龙牙相关的事宜</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
          </p>
          <p style="font-size: 20px"><span>七、其他</span></p>
          <p style="font-size: 14px">
            <span
              >1、在适用法律法规允许的范围内，本协议最终解释权归龙牙公司所有。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >2、本协议已经公布即生效，龙牙公司有权随时对协议内容进行修改，修改后的结果公布于龙牙网站上。如果不同意龙牙对本协议相关条款所做的修改，用户有权停止使用网络服务。如果用户继续使用网络服务，则视为用户接受龙牙公司对本协议相关条款所做的修改。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >3、本协议项下龙牙对于用户所有的通知均可通过网页公告、电子邮件、手机短信或常规的信件传送等方式进行；该等通知于发送之日视为已送达收件人。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >4、本协议的订立、执行和解释及争议的解决均应适用中国法律并受中国法院管辖。如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决；协商不成时，任何一方均可向龙牙公司所在地的人民法院提起诉讼。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >5、本协议构成双方对本协议之约定事项及其他有关事宜的完整协议，除本协议规定的之外，未赋予本协议各方其他权利。</span
            >
          </p>
          <p style="font-size: 14px">
            <span
              >6、如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并具有约束力。</span
            >
          </p>
          <p style="font-size: 14px">
            <span><br /></span>
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
#about-user {
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
    padding: 0 20px;

    p {
      list-style: none;
      line-height: 30px;
      font-size: 14px;
      padding: 30px;
      padding: 10px 0;
    }
  }

  .Recharge {
    margin: 0;
    padding: 0 20px;

    p {
      list-style: none;
      line-height: 30px;
      font-size: 14px;
      padding: 10px 0;
    }
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