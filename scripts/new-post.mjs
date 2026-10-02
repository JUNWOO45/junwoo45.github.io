import { mkdir, writeFile } from 'node:fs/promises';
const slug = process.argv[2];
if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error('사용법: npm run new:post -- my-first-post (영문 소문자, 숫자, 하이픈)');
  process.exit(1);
}
const date = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
await mkdir('src/content/posts', { recursive: true });
const path = `src/content/posts/${slug}.md`;
try {
  await writeFile(path, `---\ntitle: "새로운 기록"\ndescription: "글을 한 문장으로 소개해주세요."\ndate: ${date}\ntags: []\ndraft: true\n---\n\n여기서 이야기를 시작하세요.\n`, { flag: 'wx' });
  console.log(`초안 생성: ${path}`);
} catch (error) {
  if (error.code === 'EEXIST') { console.error('같은 이름의 글이 이미 있어요. 다른 이름을 사용해주세요.'); process.exit(1); }
  throw error;
}
