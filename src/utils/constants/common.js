import paperAirline from '../../assets/images/paperAirline.png'
import globus from '../../assets/images/globus.png'
import piggyBank from '../../assets/images/piggyBank.png'
import OurTeamImg1 from '../../assets/images/mairamgul.jpg'
import OurTeamImg2 from '../../assets/images/adil.jpg'
import OurTeamImg3 from '../../assets/images/kaukhar.jpg'
import OurTeamImg4 from '../../assets/images/aziat.jpg'
import OurTeamImg5 from '../../assets/images/person5.png'
import OurTeamImg6 from '../../assets/images/person6.png'
import avatar1 from '../../assets/images/avatar1.jpg'
import avatar2 from '../../assets/images/avatar2.jpg'
import avatar3 from '../../assets/images/avatar3.jpg'
import avatar4 from '../../assets/images/avatar4.jpg'
import avatar5 from '../../assets/images/avatar5.jpg'
import SelectEnglishWords from '../../containers/user/type/SelectEnglishWords'
import RespondNWords from '../../containers/user/type/RespondNWords'
import HighlightTheAnswer from '../../containers/user/type/HighlightTheAnswer'
import RecordSaying from '../../containers/user/type/RecordSaying'
import ListenAndSelect from '../../containers/user/type/ListenAndSelect'
import ClientBestTitle from '../../containers/user/type/ClientBestTitle'
import ClientMainIdea from '../../containers/user/type/ClientMainIdea'
import TypeWhatYouHear from '../../containers/user/type/UserTestTypeWhatYouHear'
import UserTestDescribeImage from '../../containers/user/type/UserTestDescribeImage'
import ListenAndSelectResult from '../../containers/admin/pages/submitePage/typeQuestion/ListenAndSelectResult'
import CheckHighLightTheAnswer from '../../containers/admin/pages/submitePage/typeQuestion/CheckHighlightTheAnswer'
import RecordSayingResult from '../../containers/admin/pages/submitePage/typeQuestion/RecordSayingResult'
import RespondinatLeastNwords from '../../containers/admin/pages/submitePage/typeQuestion/RespondinatLeastNwords'
import RealWordsResult from '../../containers/admin/pages/submitePage/typeQuestion/RealWordsResult'
import CheckSelectTheMainIdea from '../../containers/admin/pages/submitePage/typeQuestion/CheckSelectTheMainIdea'
import CheckBestTitle from '../../containers/admin/pages/submitePage/typeQuestion/CheckBestTitle'
import TypeWhatYouHearSubmitTest from '../../containers/admin/pages/submitePage/typeQuestion/TypeWhatYouHearSubmitTest'
import DescribeImageSubmitTest from '../../containers/admin/pages/submitePage/typeQuestion/DescribeImageSubmitTest'

export const STORAGE_KEYS = {
   BILINGUAL_USER_KEY: 'BILINGUAL_USER_KEY',
}

export const infoCardArray = [
   {
      img: paperAirline,
      text: 'Over 10,000 fee waivers for the Bilingual English Test areoffered annually.',
      id: 1,
   },
   {
      img: globus,
      text: 'Students from over 200 countries and territories have benefitted.',
      id: 2,
   },
   {
      img: piggyBank,
      text: 'Eligible students can take the test with absolutely zero cost to them.',
      id: 3,
   },
]

export const ourTeamArray = [
   {
      img: OurTeamImg1,
      name: 'Mairamgul Ormonova',
      employee: 'Founder Bilingual',
      id: 1,
   },
   {
      img: OurTeamImg2,
      name: 'Adil Aitbaev',
      employee: 'Marketer',
      id: 2,
   },
   {
      img: OurTeamImg3,
      name: 'Kaukhar Zarlykova',
      employee: 'Developer',
      id: 3,
   },
   {
      img: OurTeamImg4,
      name: 'Aziat Abdimalikov',
      employee: 'UX/UI Designer',
      id: 4,
   },
   {
      img: OurTeamImg5,
      name: 'Alibek Altynbek uulu ',
      employee: 'Chief Editor',
      id: 5,
   },
   {
      img: OurTeamImg6,
      name: 'Elon Musk',
      employee: 'Chief Editor',
      id: 6,
   },
]

export const humans = [
   {
      id: 1,
      description:
         'Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.',
      name: 'Aibek Atabekov',
      rating: 5,
      avatar: avatar1,
   },
   {
      id: 2,
      description:
         'Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.',
      name: 'Alina Begishova',
      rating: 5,
      avatar: avatar2,
   },
   {
      id: 3,
      description:
         'I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.',
      name: 'Minura Telegenova',
      rating: 5,
      avatar: avatar3,
   },
   {
      id: 4,
      description:
         'Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.',
      name: 'Aibek Atabekov',
      rating: 5,
      avatar: avatar4,
   },
   {
      id: 5,
      description:
         'I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.',
      name: 'Alina Begishova',
      rating: 5,
      avatar: avatar5,
   },
]

export const questionTypes = {
   SelectRealEnglishWords: 'Select real English words',
   ListenAndSelect: 'Listen and select English word',
   TypeWhatYourHear: 'Type what you hear',
   DescribeImage: 'Describe image',
   RecordSayingStatement: 'Record saying statement',
   RespondInAtLeastNWords: 'Respond in at least N words',
   HighlightTheAnswer: 'Highlight the answer',
   SelectTheMainIdea: 'Select the main idea',
   SelectBestTitle: 'Select best title',
}

export const questionsApi = {
   selectRealEnglishWords: 'api/questions/select-real-english-word',
   listenAndSelect: 'api/questions/listen_and_select_english_words',
   typeWhatYourHear: 'api/questions/type-what-you-hear',
   describeImage: 'api/questions/describe-image',
   recordSayingStatement: 'api/questions/record-saying-statement',
   respondInAtLeastNWords: 'api/questions/respond-n-words',
   highlightTheAnswer: 'api/questions/highlight-the-answer',
   selectTheMainIdea: 'api/questions/select-the-main-idea',
   selectBestTitle: 'api/questions/select-best-title',
}

export const questionComponents = {
   SELECT_ENGLISH_WORD: SelectEnglishWords,
   SELECT_THE_MAIN_IDEA: ClientBestTitle,
   TYPE_WHAT_YOU_HEAR: TypeWhatYouHear,
   DESCRIBE_IMAGE: UserTestDescribeImage,
   LISTEN_AND_SELECT_ENGLISH_WORD: ListenAndSelect,
   RECORD_SAYING_STATEMENT: RecordSaying,
   RESPOND_N_WORDS: RespondNWords,
   SELECT_BEST_TITLE: ClientMainIdea,
   HIGHLIGHT_THE_ANSWER: HighlightTheAnswer,
}
export const resultQuestionComponents = {
   LISTEN_AND_SELECT_ENGLISH_WORD: ListenAndSelectResult,
   SELECT_ENGLISH_WORD: RealWordsResult,
   SELECT_THE_MAIN_IDEA: CheckSelectTheMainIdea,
   TYPE_WHAT_YOU_HEAR: TypeWhatYouHearSubmitTest,
   DESCRIBE_IMAGE: DescribeImageSubmitTest,
   RECORD_SAYING_STATEMENT: RecordSayingResult,
   RESPOND_N_WORDS: RespondinatLeastNwords,
   SELECT_BEST_TITLE: CheckBestTitle,
   HIGHLIGHT_THE_ANSWER: CheckHighLightTheAnswer,
}
