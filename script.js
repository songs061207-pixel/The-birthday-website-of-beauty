const pageStack = document.getElementById("pageStack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageCurrent = document.getElementById("pageCurrent");
const pageTotal = document.getElementById("pageTotal");
const musicToggle = document.getElementById("musicToggle");
const musicLabelCn = document.getElementById("musicLabelCn");
const musicLabelEn = document.getElementById("musicLabelEn");
const bgm = document.getElementById("bgm");
const endingSong = document.getElementById("endingSong");

const ANIMATION_MS = 720;
const photoPageLines = [
  "故事就从这些被认真记住的瞬间开始。",
  "有些好看不用刻意摆拍，也会自己发光。",
  "把那天的风、光和心情，都悄悄收进这一页。",
  "你的镜头感，连随手一拍都很偏爱。",
  "快乐这件事，和你放在一起就变得很自然。",
  "生活被你好好记录，所以平凡也有了亮晶晶的边角。",
  "翻到这里的时候，已经有一点舍不得翻太快了。",
  "这一页想单独留给你，愿你天天开心。"
];

// 修改标题的位置
// 这里集中放封面、章节标题、按钮标题，后续只需要改这里。
const siteData = {
  cover: {
    kicker: "A Small Birthday Gift",
    titleCn: "Jiaoyang dameinv Happy Birthday",
    titleEn: "",
    subtitleCn: "帅哥做的一个小礼物，不用谢😎。",
    subtitleEn: "No thanks.",
    poemLines: [
      "因为发现没有照片可以用，所以从你的朋友圈拿了一些照片来，是爱记录生活的美女一枚🥺。"
    ],
    enterLabelCn: "翻开大美女的零碎日常🪷",
    enterLabelEn: "",
    musicLabelCn: "美女请听歌👑",
    musicLabelEn: "",
    coverPhoto: "照片/微信图片_2026-03-18_185243_178.jpg",
    coverPhotoAlt: "封面照片"
  },

  // 修改文案的位置
  // Intro、目录、祝福、结尾的中英混合文案都在这里改。
  intro: {
    kicker: "",
    headingCn: "",
    headingEn: "",
    paragraphs: [],
    signatureCn: "",
    signatureEn: ""
  },
  albumIndex: {
    kicker: "",
    headingCn: "",
    headingEn: "",
    bodyCn: "",
    bodyEn: "",
    bullets: [],
    startLabelCn: "",
    startLabelEn: ""
  },
  messagePage: {
    kicker: "",
    headingCn: "",
    headingEn: "",
    paragraphs: [],
    signCn: "",
    signEn: ""
  },
  endingPage: {
    kicker: "",
    headingCn: "",
    headingEn: "",
    lineCn: "我的好朋友，愿你快乐，不止生日。",
    lineEn: "May this little website glow softly whenever you think of today.",
    backLabelCn: "反方向的钟",
    backLabelEn: "",
    replayLabelCn: "",
    replayLabelEn: "",
    songSrc: "Happy Birthday-Twins#1xzb6.mp3",
    cakePhoto: "照片/微信图片_2026-03-23_220100_052.jpg",
    cakePhotoAlt: "Birthday cake",
    portraitPhoto: "照片/微信图片_2026-03-23_220118_680.jpg",
    portraitPhotoAlt: "Birthday portrait"
  },

  // 替换音乐文件的位置
  // 把 music/bgm.mp3 改成你自己的音乐文件路径即可。
  music: {
    src: "Rollin' On - 椅子乐团 The Chairs.mp3",
    idleCn: "大美女请点击播放音乐🎵",
    idleEn: "",
    playingCn: "点击暂停音乐",
    playingEn: "",
    missingCn: "待放入 BGM",
    missingEn: ""
  },

  // 替换30张照片的位置
  // 当前已接入“照片”文件夹里的 25 张照片；每一项都是一张照片，src 改路径，captionCn / captionEn 改照片下的小字。
  photos: [
    { src: "照片/微信图片_2026-03-18_185243_178.jpg", captionCn: "", captionEn: "", frame: "tall", position: "center" },
    { src: "照片/微信图片_2026-03-18_185305_469.jpg", captionCn: "", captionEn: "", frame: "wide", position: "center" },
    { src: "照片/微信图片_2026-03-18_185328_478.jpg", captionCn: "", captionEn: "", frame: "square", position: "center" },
    { src: "照片/微信图片_2026-03-18_185340_406.jpg", captionCn: "", captionEn: "", frame: "tall", position: "center" },
    { src: "照片/微信图片_2026-03-18_185400_488.jpg", captionCn: "", captionEn: "", frame: "wide", position: "center" },
    { src: "照片/微信图片_2026-03-18_185411_910.jpg", captionCn: "", captionEn: "", frame: "tall", position: "center" },
    { src: "照片/微信图片_2026-03-18_185425_516.jpg", captionCn: "", captionEn: "", frame: "tall", position: "center" },
    { src: "照片/微信图片_2026-03-18_185440_768.jpg", captionCn: "", captionEn: "", frame: "wide", position: "center" },
    { src: "照片/微信图片_2026-03-18_185447_936.jpg", captionCn: "", captionEn: "", frame: "square", position: "center" },
    { src: "照片/微信图片_2026-03-18_185454_147.jpg", captionCn: "", captionEn: "", frame: "tall", position: "center" },
    { src: "照片/微信图片_2026-03-18_185501_168.jpg", captionCn: "", captionEn: "", frame: "tall", position: "center" },
    { src: "照片/微信图片_2026-03-18_185504_707.jpg", captionCn: "", captionEn: "", frame: "wide", position: "center" },
    { src: "照片/微信图片_2026-03-18_185539_075.jpg", captionCn: "", captionEn: "", frame: "tall", position: "center" },
    { src: "照片/微信图片_2026-03-18_185603_286.jpg", captionCn: "", captionEn: "", frame: "square", position: "center" },
    { src: "照片/微信图片_2026-03-18_185616_195.jpg", captionCn: "", captionEn: "", frame: "wide", position: "center" },
    { src: "照片/微信图片_2026-03-18_185913_234.jpg", captionCn: "", captionEn: "", frame: "tall", position: "center" },
    { src: "照片/微信图片_2026-03-18_185922_872.jpg", captionCn: "", captionEn: "", frame: "wide", position: "center" },
    { src: "照片/微信图片_2026-03-18_185933_665.jpg", captionCn: "", captionEn: "", frame: "tall", position: "center" },
    { src: "照片/微信图片_2026-03-18_190003_923.jpg", captionCn: "", captionEn: "", frame: "square", position: "center" },
    { src: "照片/微信图片_2026-03-18_190013_653.jpg", captionCn: "", captionEn: "", frame: "tall", position: "center" },
    { src: "照片/微信图片_2026-03-18_190037_752.jpg", captionCn: "", captionEn: "", frame: "wide", position: "center" },
    { src: "照片/微信图片_2026-03-18_190148_201.jpg", captionCn: "", captionEn: "", frame: "tall", position: "center" },
    { src: "照片/微信图片_2026-03-18_190307_192.jpg", captionCn: "", captionEn: "", frame: "square", position: "center" },
    { src: "照片/微信图片_2026-03-18_190327_899.jpg", captionCn: "", captionEn: "", frame: "wide", position: "center" },
    { src: "照片/微信图片_2026-03-18_190358_380.jpg", captionCn: "", captionEn: "", frame: "tall", position: "center" }
  ]
};

const photoSpreadNotes = [
  "你一出现，这一页就亮了。",
  "有些瞬间，天生适合被收藏。",
  "风景很好看，但你更好看。",
  "连随手一拍，都很有被偏爱的感觉。",
  "快乐放在你身上，就变得很具体。",
  "被认真记录的人，会一直发光。",
  "翻到这里，已经开始舍不得太快。",
  "这一页单独留给你，愿你天天开心。"
];

let pageElements = [];
let bookPages = [];
let currentPageIndex = 0;
let isAnimating = false;
let pendingPageIndex = null;
let musicAvailable = true;
let endingSongAvailable = true;
let endingSequenceStarted = false;
let resumeMainAfterEnding = false;

init();

function init() {
  configureMusic();
  buildPages();
  renderBook();
  bindEvents();
  updateMusicButton();
}

function configureMusic() {
  bgm.src = toAssetUrl(siteData.music.src);
  bgm.load();
  endingSong.src = toAssetUrl(siteData.endingPage.songSrc);
  endingSong.load();
}

function buildPages() {
  const photoSpreads = buildPhotoSpreads(siteData.photos);

  bookPages = [
    { type: "cover", data: siteData.cover },
    ...(hasSectionContent(siteData.intro) ? [{ type: "intro", data: siteData.intro }] : []),
    ...(hasSectionContent(siteData.albumIndex) ? [{ type: "album-index", data: siteData.albumIndex }] : []),
    ...photoSpreads.map((spread, spreadIndex) => ({
      type: "photo-spread",
      data: {
        ...spread,
        pageLine: photoSpreadNotes[spreadIndex] || "",
        spreadIndex: spreadIndex + 1,
        totalSpreads: photoSpreads.length
      }
    })),
    ...(hasSectionContent(siteData.messagePage) ? [{ type: "message", data: siteData.messagePage }] : []),
    { type: "ending", data: siteData.endingPage }
  ];
}

function hasText(value) {
  return typeof value === "string" && value.trim() !== "";
}

function hasParagraphContent(item) {
  return hasText(item?.cn) || hasText(item?.en);
}

function hasSectionContent(section) {
  return Object.values(section).some((value) => {
    if (Array.isArray(value)) {
      return value.some((item) => {
        if (typeof item === "string") {
          return hasText(item);
        }

        if (item && typeof item === "object") {
          return Object.values(item).some((innerValue) => hasText(innerValue));
        }

        return false;
      });
    }

    return hasText(value);
  });
}

function renderTextElement(tagName, className, text) {
  if (!hasText(text)) {
    return "";
  }

  return `<${tagName} class="${className}">${escapeHtml(text)}</${tagName}>`;
}

function renderButtonLabel(cn, en) {
  return `
    <span class="button-dual">
      ${hasText(cn) ? `<strong>${escapeHtml(cn)}</strong>` : ""}
      ${hasText(en) ? `<span>${escapeHtml(en)}</span>` : ""}
    </span>
  `;
}

function renderParagraphGroups(paragraphs) {
  return paragraphs
    .filter(hasParagraphContent)
    .map(
      (item) => `
        <div>
          ${renderTextElement("p", "body-copy", item.cn)}
          ${renderTextElement("p", "caption-en", item.en)}
        </div>
      `
    )
    .join("");
}

function buildPhotoSpreads(photos) {
  const soloPhoto = photos.find((photo) => photo.src.endsWith("_190358_380.jpg"));
  const spreadPhotos = soloPhoto ? photos.filter((photo) => photo !== soloPhoto) : photos;
  const counts = splitPhotoCounts(spreadPhotos.length);
  const layoutsByCount = {
    2: ["duet", "duet-alt"],
    3: ["trio-feature", "trio-postcards"],
    4: ["quartet-grid", "quartet-postcards"]
  };

  const spreads = [];
  let start = 0;
  let layoutCursor = 0;

  counts.forEach((count) => {
    const items = spreadPhotos.slice(start, start + count);
    const layoutOptions = layoutsByCount[count];
    const layout = layoutOptions[layoutCursor % layoutOptions.length];

    spreads.push({
      layout,
      items
    });

    layoutCursor += 1;
    start += count;
  });

  if (soloPhoto) {
    spreads.push({
      layout: "solo-center",
      items: [soloPhoto]
    });
  }

  return spreads;
}

function splitPhotoCounts(total) {
  const counts = [];
  let remaining = total;
  const preferredCounts = [3, 4, 2, 4];
  let preferredIndex = 0;

  while (remaining > 0) {
    if (remaining <= 4) {
      counts.push(remaining);
      break;
    }

    let chosenCount = null;

    for (let offset = 0; offset < preferredCounts.length; offset += 1) {
      const candidate = preferredCounts[(preferredIndex + offset) % preferredCounts.length];
      if (candidate <= remaining && remaining - candidate !== 1) {
        chosenCount = candidate;
        preferredIndex += offset + 1;
        break;
      }
    }

    if (chosenCount === null) {
      chosenCount = remaining === 5 ? 2 : 3;
      preferredIndex += 1;
    }

    counts.push(chosenCount);
    remaining -= chosenCount;
  }

  return counts;
}

function renderBook() {
  pageStack.innerHTML = bookPages.map((page, index) => renderPage(page, index)).join("");
  pageElements = Array.from(pageStack.querySelectorAll(".page"));
  pageTotal.textContent = padNumber(bookPages.length);
  updatePageState();
  attachImageFallbacks();
}

function renderPage(page, index) {
  switch (page.type) {
    case "cover":
      return renderCoverPage(page.data, index);
    case "intro":
      return renderIntroPage(page.data, index);
    case "album-index":
      return renderAlbumIndexPage(page.data, index);
    case "photo-spread":
      return renderPhotoSpreadPage(page.data, index);
    case "message":
      return renderMessagePage(page.data, index);
    case "ending":
      return renderEndingPage(page.data, index);
    default:
      return "";
  }
}

function renderCoverPage(data, index) {
  const poemLines = data.poemLines.filter((line) => hasText(line));

  return `
    <section class="page cover-page" data-index="${index}" data-type="cover" aria-label="封面页">
      <div class="page__inner cover-copy">
        <div class="cover-copy__top">
          ${renderTextElement("span", "page-kicker", data.kicker)}
          <div>
            ${renderTextElement("p", "display-en", data.titleEn)}
            ${renderTextElement("h1", "display-cn", data.titleCn)}
          </div>
          ${renderTextElement("p", "cover-subtitle", data.subtitleCn)}
          ${renderTextElement("p", "caption-en", data.subtitleEn)}
          ${poemLines.length > 0
            ? `<div class="cover-poem">${poemLines.map((line) => `<span>${escapeHtml(line)}</span>`).join("")}</div>`
            : ""}
        </div>

        <div class="page-actions">
          <button class="soft-button" type="button" data-action="goto" data-target="${index + 1}">
            ${renderButtonLabel(data.enterLabelCn, data.enterLabelEn)}
          </button>
          <button class="outline-button" type="button" data-action="music">
            ${renderButtonLabel(data.musicLabelCn, data.musicLabelEn)}
          </button>
        </div>
      </div>

      <div class="page__inner cover-visual">
        <div class="cover-frame">
          <div class="cover-frame__ribbon" aria-hidden="true"></div>
          <div class="cover-frame__inner">
            <div class="cover-frame__seal" aria-hidden="true"></div>
            <div class="cover-frame__photo ${missingImageClass(data.coverPhoto)}">
              <img src="${escapeAttribute(data.coverPhoto)}" alt="${escapeAttribute(data.coverPhotoAlt)}" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderIntroPage(data, index) {
  return `
    <section class="page letter-page" data-index="${index}" data-type="intro" aria-label="引言页">
      <div class="page__inner letter-aside">
        ${renderTextElement("span", "page-kicker", data.kicker)}
        <div>
          ${renderTextElement("p", "section-title__en", data.headingEn)}
          ${renderTextElement("h2", "section-title__cn", data.headingCn)}
        </div>
      </div>

      <div class="page__inner letter-panel">
        <div class="letter-body">${renderParagraphGroups(data.paragraphs)}</div>

        <div class="letter-signature">
          ${renderTextElement("span", "", data.signatureEn)}
          ${renderTextElement("strong", "", data.signatureCn)}
        </div>
      </div>
    </section>
  `;
}

function renderAlbumIndexPage(data, index) {
  return `
    <section class="page album-page" data-index="${index}" data-type="album-index" aria-label="相册目录页">
      <div class="page__inner album-copy">
        ${renderTextElement("span", "page-kicker", data.kicker)}
        <div>
          ${renderTextElement("p", "section-title__en", data.headingEn)}
          ${renderTextElement("h2", "section-title__cn", data.headingCn)}
        </div>
        ${renderTextElement("p", "body-copy", data.bodyCn)}
        ${renderTextElement("p", "caption-en", data.bodyEn)}
        ${data.bullets.filter((item) => hasText(item)).length > 0
          ? `<ul>${data.bullets.filter((item) => hasText(item)).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
          : ""}
        ${hasText(data.startLabelCn) || hasText(data.startLabelEn)
          ? `<div class="page-actions">
          <button class="soft-button" type="button" data-action="goto" data-target="${index + 1}">
            ${renderButtonLabel(data.startLabelCn, data.startLabelEn)}
          </button>
        </div>`
          : ""}
      </div>

      <div class="page__inner album-visual">
        <div class="album-board">
          <div class="album-board__grid">
            ${siteData.photos.slice(0, 4).map(renderAlbumPreviewCard).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderAlbumPreviewCard(photo, previewIndex) {
  return `
    <div class="album-board__card">
      <div class="album-board__thumb ${missingImageClass(photo.src)}">
        <img src="${escapeAttribute(photo.src)}" alt="相册预览 ${previewIndex + 1}" />
      </div>
    </div>
  `;
}

function renderPhotoSpreadPage(data, index) {
  return `
    <section class="page photo-page" data-index="${index}" data-type="photo-spread" aria-label="照片纪念册页 ${data.spreadIndex}">
      <div class="page__inner photo-spread__layout photo-spread__layout--${escapeAttribute(data.layout)}">
        ${data.items.map(renderPhotoCard).join("")}
        ${renderPhotoSpreadNote(data)}
      </div>
    </section>
  `;
}

function renderPhotoSpreadNote(data) {
  if (!hasText(data.pageLine)) {
    return "";
  }

  return `
    <aside class="photo-spread__quote photo-spread__quote--${escapeAttribute(data.layout)}" aria-hidden="true">
      <span>${escapeHtml(data.pageLine)}</span>
    </aside>
  `;
}

function renderPhotoCard(photo) {
  const frame = photo.frame || "auto";
  const position = getObjectPosition(photo.position);
  const hasCaption = hasText(photo.captionCn) || hasText(photo.captionEn);

  return `
    <figure class="photo-card ${missingImageClass(photo.src)}" data-frame="${escapeAttribute(frame)}" style="--photo-position: ${escapeAttribute(position)};">
      <div class="photo-card__frame">
        <img src="${escapeAttribute(photo.src)}" alt="${escapeAttribute(hasText(photo.captionCn) ? photo.captionCn : "照片")}" loading="lazy" />
      </div>
      ${hasCaption
        ? `<figcaption class="photo-card__caption">
        ${renderTextElement("strong", "", photo.captionCn)}
        ${renderTextElement("span", "", photo.captionEn)}
      </figcaption>`
        : ""}
    </figure>
  `;
}

function renderMessagePage(data, index) {
  return `
    <section class="page message-page" data-index="${index}" data-type="message" aria-label="祝福页">
      <div class="page__inner message-shell">
        ${renderTextElement("span", "page-kicker", data.kicker)}
        <div>
          ${renderTextElement("p", "message-title__en", data.headingEn)}
          ${renderTextElement("h2", "message-title__cn", data.headingCn)}
        </div>
        <div class="message-body">${renderParagraphGroups(data.paragraphs)}</div>
        <div class="message-sign">
          ${renderTextElement("span", "", data.signEn)}
          ${renderTextElement("strong", "", data.signCn)}
        </div>
      </div>
    </section>
  `;
}

function renderEndingPage(data, index) {
  return `
    <section class="page ending-page" data-index="${index}" data-type="ending" aria-label="结尾页">
      <div class="page__inner ending-shell">
        <div class="ending-scene">
          ${renderTextElement("span", "page-kicker", data.kicker)}
          <div class="ending-scene__stars" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button class="ending-cake-button" type="button" data-action="ending-cake" aria-label="Play birthday song">
            <span class="ending-cake-button__halo" aria-hidden="true"></span>
            <span class="ending-cake-button__frame ${missingImageClass(data.cakePhoto)}">
              <img src="${escapeAttribute(data.cakePhoto)}" alt="${escapeAttribute(data.cakePhotoAlt)}" loading="lazy" />
            </span>
          </button>

          <div class="ending-portrait">
            <div class="ending-portrait__frame ${missingImageClass(data.portraitPhoto)}">
              <img src="${escapeAttribute(data.portraitPhoto)}" alt="${escapeAttribute(data.portraitPhotoAlt)}" loading="lazy" />
            </div>
          </div>

          <div class="ending-copy">
            <div>
              ${renderTextElement("p", "ending-title__en", data.headingEn)}
              ${renderTextElement("h2", "ending-title__cn", data.headingCn)}
            </div>
            ${renderTextElement("p", "body-copy", data.lineCn)}
            ${renderTextElement("p", "caption-en", data.lineEn)}
            <div class="page-actions">
              <button class="soft-button" type="button" data-action="goto" data-target="0">
                ${renderButtonLabel(data.backLabelCn, data.backLabelEn)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function bindEvents() {
  prevBtn.addEventListener("click", prevPage);
  nextBtn.addEventListener("click", nextPage);
  musicToggle.addEventListener("click", toggleMusic);

  pageStack.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) {
      return;
    }

    if (actionButton.dataset.action === "goto") {
      goToPage(Number(actionButton.dataset.target));
      return;
    }

    if (actionButton.dataset.action === "music") {
      toggleMusic();
      return;
    }

    if (actionButton.dataset.action === "ending-cake") {
      toggleEndingMoment();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextPage();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prevPage();
    }
  });

  bgm.addEventListener("play", updateMusicButton);
  bgm.addEventListener("pause", updateMusicButton);
  bgm.addEventListener("error", handleMissingMusic);
  endingSong.addEventListener("play", updateMusicButton);
  endingSong.addEventListener("pause", updateMusicButton);
  endingSong.addEventListener("error", handleMissingEndingSong);
}

function attachImageFallbacks() {
  const images = pageStack.querySelectorAll("img");

  images.forEach((image) => {
    if (image.complete && image.naturalWidth === 0) {
      const card = image.closest(".photo-card, .album-board__thumb, .cover-frame__photo, .ending-cake-button__frame, .ending-portrait__frame");
      if (card) {
        card.classList.add("is-missing");
      }
    }

    image.addEventListener("error", () => {
      const card = image.closest(".photo-card, .album-board__thumb, .cover-frame__photo, .ending-cake-button__frame, .ending-portrait__frame");
      if (card) {
        card.classList.add("is-missing");
      }
    });
  });
}

function nextPage() {
  goToPage(currentPageIndex + 1);
}

function prevPage() {
  goToPage(currentPageIndex - 1);
}

function goToPage(targetIndex) {
  const clampedIndex = clamp(targetIndex, 0, bookPages.length - 1);

  if (clampedIndex === currentPageIndex) {
    return;
  }

  if (isAnimating) {
    pendingPageIndex = clampedIndex;
    return;
  }

  if (isEndingPageIndex(currentPageIndex)) {
    stopEndingMoment({ resumeMain: true });
  }

  isAnimating = true;
  currentPageIndex = clampedIndex;
  updatePageState();

  window.setTimeout(() => {
    isAnimating = false;

    if (pendingPageIndex !== null && pendingPageIndex !== currentPageIndex) {
      const nextTarget = pendingPageIndex;
      pendingPageIndex = null;
      goToPage(nextTarget);
      return;
    }

    pendingPageIndex = null;
  }, ANIMATION_MS);
}

function updatePageState() {
  pageElements.forEach((pageElement, index) => {
    pageElement.classList.remove("is-active", "is-prev", "is-next", "is-before", "is-after");

    if (index === currentPageIndex) {
      pageElement.classList.add("is-active");
    } else if (index === currentPageIndex - 1) {
      pageElement.classList.add("is-prev");
    } else if (index < currentPageIndex - 1) {
      pageElement.classList.add("is-before");
    } else if (index === currentPageIndex + 1) {
      pageElement.classList.add("is-next");
    } else {
      pageElement.classList.add("is-after");
    }

    pageElement.classList.toggle("is-lit", pageElement.dataset.type === "ending" && endingSequenceStarted);
  });

  pageCurrent.textContent = padNumber(currentPageIndex + 1);
  prevBtn.disabled = currentPageIndex === 0;
  nextBtn.disabled = currentPageIndex === bookPages.length - 1;
  prevBtn.setAttribute("aria-disabled", String(prevBtn.disabled));
  nextBtn.setAttribute("aria-disabled", String(nextBtn.disabled));
}

async function toggleMusic() {
  const audioState = getActiveAudioState();

  if (!audioState.available) {
    updateMusicButton();
    return;
  }

  if (audioState.audio.paused) {
    try {
      await audioState.audio.play();
    } catch (error) {
      audioState.handleMissing();
    }
    return;
  }

  audioState.audio.pause();
}

function handleMissingMusic() {
  musicAvailable = false;
  bgm.pause();
  bgm.removeAttribute("src");
  updateMusicButton();
}

function handleMissingEndingSong() {
  endingSongAvailable = false;
  endingSong.pause();
  endingSong.removeAttribute("src");
  updateMusicButton();
}

function updateMusicButton() {
  const audioState = getActiveAudioState();
  const isPlaying = audioState.available && !audioState.audio.paused && !audioState.audio.ended;

  musicToggle.classList.toggle("is-playing", isPlaying);
  musicToggle.classList.toggle("is-disabled", !audioState.available);
  musicToggle.setAttribute("aria-pressed", String(isPlaying));

  if (!audioState.available) {
    musicLabelCn.textContent = siteData.music.missingCn;
    musicLabelEn.textContent = siteData.music.missingEn;
    musicToggle.setAttribute("aria-label", siteData.music.missingCn);
    return;
  }

  musicLabelCn.textContent = isPlaying ? siteData.music.playingCn : siteData.music.idleCn;
  musicLabelEn.textContent = isPlaying ? siteData.music.playingEn : siteData.music.idleEn;
  musicToggle.setAttribute("aria-label", isPlaying ? siteData.music.playingCn : siteData.music.idleCn);
}

async function toggleEndingMoment() {
  if (!isEndingPageIndex(currentPageIndex)) {
    return;
  }

  if (!endingSequenceStarted) {
    await startEndingMoment();
    return;
  }

  if (!endingSongAvailable) {
    updateMusicButton();
    return;
  }

  if (endingSong.paused) {
    try {
      await endingSong.play();
    } catch (error) {
      handleMissingEndingSong();
    }
    return;
  }

  endingSong.pause();
}

async function startEndingMoment() {
  endingSequenceStarted = true;
  resumeMainAfterEnding = musicAvailable && !bgm.paused && !bgm.ended;

  if (!bgm.paused) {
    bgm.pause();
  }

  updatePageState();

  if (!endingSongAvailable) {
    updateMusicButton();
    return;
  }

  endingSong.currentTime = 0;

  try {
    await endingSong.play();
  } catch (error) {
    handleMissingEndingSong();
  }
}

function stopEndingMoment({ resumeMain = false } = {}) {
  if (!endingSequenceStarted) {
    return;
  }

  endingSequenceStarted = false;
  endingSong.pause();
  endingSong.currentTime = 0;

  const shouldResumeMain = resumeMain && resumeMainAfterEnding && musicAvailable;
  resumeMainAfterEnding = false;

  updatePageState();

  if (!shouldResumeMain) {
    updateMusicButton();
    return;
  }

  bgm.play().catch(() => {
    handleMissingMusic();
  });
}

function getActiveAudioState() {
  if (isEndingPageIndex(currentPageIndex) && endingSequenceStarted) {
    return {
      audio: endingSong,
      available: endingSongAvailable,
      handleMissing: handleMissingEndingSong
    };
  }

  return {
    audio: bgm,
    available: musicAvailable,
    handleMissing: handleMissingMusic
  };
}

function isEndingPageIndex(pageIndex) {
  return bookPages[pageIndex]?.type === "ending";
}

function getObjectPosition(position) {
  switch (position) {
    case "top":
      return "center top";
    case "bottom":
      return "center bottom";
    default:
      return "center center";
  }
}

function missingImageClass(src) {
  return src ? "" : "is-missing";
}

function padNumber(value) {
  return String(value).padStart(2, "0");
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function toAssetUrl(path) {
  return String(path)
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}
