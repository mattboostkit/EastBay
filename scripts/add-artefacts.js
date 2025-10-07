const https = require('https');

const PROJECT_ID = 'ce9tlzu0';
const DATASET = 'production';
const TOKEN = 'skRHOBtj53HncZvr9maXTJVoNrSDqRVN92UUcsSIiX1P2Fh0FJU0mVf1GlHt5LBupIMRApZkrmhLUZcVMLLmR6VkbLnrGq0NjqAStwfkH0LrH2M35mZWbi1Kr5ioHZznoua67VeVN4Cq4E74a3VP2ODtck8b0BGEp08Ntk6qc1pO5nQEwew3';

const artefacts = [
  { siteCode: 'EWB/FS/15', sfNumber: '1506', contextNo: '1500', keywords: ['Worked'], material: 'Bone', date: 'Iron Age/Roman', title: 'Late Iron Age Worked Bone - SF1506', description: 'Late Iron Age worked bone. This cylindrical piece of worked bone has had two parallel holes worked into it.' },
  { siteCode: 'EWB/FS/15', sfNumber: '1510', contextNo: '1517', keywords: ['Spindle whorl'], material: 'Ceramic', date: 'Late Iron Age', title: 'Late Iron Age Ceramic Spindle Whorl - SF1510', description: 'Late Iron Age ceramic spindle whorl. Spindle whorls would have been used with a drop spindle in making yarn for weaving. The spindle whorl is made from flint tempered clay, where small fragments of flint were added to help reduce shrinking and cracking when the clay was fired.' },
  { siteCode: 'EWB/FS/15', sfNumber: '1522', contextNo: '1537', keywords: ['Unidentified'], material: 'Pottery', date: 'Undated', title: 'Undated Pottery Fragment - SF1522', description: 'Undated pottery fragment. A circular hole has been drilled through this piece of pottery which suggests it was re-used after being broken. This could be part of a spindle whorl, which would have added weight to the spindle stick to help it spin, twisting the wool into yarn.' },
  { siteCode: 'EWB/FS/15', sfNumber: '1566', contextNo: '1524', keywords: ['Arrowhead'], material: 'Flint', date: 'Undated', title: 'Undated Flint Arrowhead - SF1566', description: 'Undated flint arrowhead with clear worked markings.' },
  { siteCode: 'EWB/FS/15', sfNumber: '1575', contextNo: '1535', keywords: ['Whetstone'], material: 'Stone', date: 'Iron Age/Roman', title: 'Iron Age/Roman Whetstone - SF1575', description: 'Iron Age or Roman period whetstone. This naturally occurring stone would have been used in the sharpening of blades, such as knives.' },
  { siteCode: 'EWB/FS/15', sfNumber: '1604', contextNo: '1602', keywords: ['Ring'], material: 'Glass', date: 'Roman', title: 'Roman Glass Ring Fragment - SF1604', description: 'Fragment of a Roman period glass ring. Glass working became popular in the Roman period with glass workers creating a wide range of colours and shapes that could even imitate precious stones. The fragment of this ring is light brown with orange flecks, which may have been part of a larger design.' },
  { siteCode: 'EWB/FS/15', sfNumber: '9001', contextNo: '1546', keywords: ['Hone'], material: 'Stone', date: 'Iron Age/Roman', title: 'Iron Age/Roman Worked Stone Hone - SF9001', description: 'Iron Age or Roman period worked stone. This artefact may have been a hone; a tool used for sharpening blades. Hones were made from naturally occurring stone with abrasive properties that would help sharpen blades.' },
  { siteCode: 'EWB/FS/15', sfNumber: '9005', contextNo: '1572', keywords: ['Fossil'], material: 'Fossil', date: 'Undated', title: 'Undated Partial Fossil Fragment - SF9005', description: 'Undated partial fossil fragment of unknown species.' },
  { siteCode: 'EWB/FS/15', sfNumber: '9006', contextNo: '1499', keywords: ['Arrowhead'], material: 'Flint', date: 'Undated', title: 'Undated Flint Arrowhead - SF9006', description: 'Undated flint arrowhead with clear worked markings.' },
  { siteCode: 'EWB/FS/15', sfNumber: '9008', contextNo: '1567', keywords: ['Worked'], material: 'Bone', date: 'Undated', title: 'Undated Worked Bone Fragment - SF9008', description: 'Undated worked bone. Fragment of worked bone with a small notch near the edge, possibly indicating its use as a tool.' },
  { siteCode: 'EWB/FS/15', sfNumber: '9009', contextNo: '1512', keywords: ['Tool'], material: 'Bone', date: 'Iron Age/Roman', title: 'Iron Age/Roman Worked Bone Tool - SF9009', description: 'Iron Age or Roman period worked bone. The end of the bone has been sharpened into a soft point possibly as some form of tool.' },
  { siteCode: 'EWB/FS/15', sfNumber: '9012', contextNo: '1512', keywords: ['Tool'], material: 'Bone', date: 'Iron Age/Roman', title: 'Iron Age/Roman Bone Tool or Pinhead - SF9012', description: 'Iron Age or Roman period worked bone tool or pinhead. Bone was a popular material for making decorative pins for hair and clothing. Animal bone was easy to come by after the slaughtering of livestock.' },
  { siteCode: 'EWB/FS/15', sfNumber: '9014', contextNo: '1546', keywords: ['Worked'], material: 'Flint', date: 'Undated', title: 'Undated Worked Flint - SF9014', description: 'Undated worked flint. There are marks on the flint where it has been struck to form a workable shape. Flint is one of the most durable materials on earth and has long been used by humans to make tools pre metalworking.' },
  { siteCode: 'EWB/FS/16', sfNumber: '1730', contextNo: '1647', keywords: ['Unworked'], material: 'Bone', date: 'Iron Age/Roman', title: 'Iron Age/Roman Dog Skull - SF1730', description: 'Iron Age or Roman dog skull. This dog skull was found in the gully of a roundhouse. The placement of dog remains in pits or within buildings was a common practice in the Iron Age and could be associated with ritualistic practices and burials, rather than just everyday life.' }
];

const mutations = artefacts.map(art => ({
  create: {
    _type: 'artefact',
    title: art.title,
    slug: { _type: 'slug', current: `artefact-sf${art.sfNumber}` },
    siteCode: art.siteCode,
    sfNumber: art.sfNumber,
    contextNo: art.contextNo,
    keywords: art.keywords,
    material: art.material,
    date: art.date,
    description: art.description
  }
}));

const postData = JSON.stringify({ mutations });

const options = {
  hostname: `${PROJECT_ID}.api.sanity.io`,
  path: `/v2023-12-18/data/mutate/${DATASET}`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', data);
  });
});

req.on('error', (e) => {
  console.error('Error:', e);
});

req.write(postData);
req.end();
