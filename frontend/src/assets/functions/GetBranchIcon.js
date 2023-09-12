import pieEcmImage from '../images/branchImg/player1.png';
import eceImage from '../images/branchImg/player2.png';
import cseImage from '../images/branchImg/player3.png';
import eeeImage from '../images/branchImg/player4.png';
import pgImage from '../images/branchImg/player5.png';
import meImage from '../images/branchImg/player10.png';
import ceImage from '../images/branchImg/player7.png';
import other1Image from '../images/branchImg/player8.png';
import other2Image from '../images/branchImg/player9.png';
import other3Image from '../images/branchImg/player11.png'

const imageMap = new Map([
    ['pie-ecm', pieEcmImage],
    ['ece', eceImage],
    ['cse', cseImage],
    ['eee', eeeImage],
    ['pg', pgImage],
    ['me', meImage],
    ['ce', ceImage],
    ['other1', other1Image],
    ['other2', other2Image],
  ]);

export default function GetBranchIcon(branchName){
    // Create an array of others (you can use any collection)
  const others = [other1Image, other2Image,other3Image];

  // Generate a random index within the range of the array's length
  const randomIndex = Math.floor(Math.random() * others.length);

  // Use the random index to select a random element from the array
  const randomImage = others[randomIndex];

  return imageMap.get(branchName) || randomImage;
}