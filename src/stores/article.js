import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useArticleStore = defineStore('article', () => {
  const articles = ref([
    {
      id: 1,
      articleTitle: 'طراحی کنترل کننده زیر دریایی نظامی در دانشگاه صنعتی شریف تهران',
      articleText:
        'کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین ۱۰ زیر دریایی برتر جهان قرار گرفت.',
      articleDate: '۲۸ تیر ۱۴۰۰',
      articleCategory: 'تکنولوژی',
      articleReadTime: '۷ دقیقه مطالعه',
      articleImage: 'http://localhost:5173/src/assets/images/articles/top-article-1.png',
      articleAuthorName: 'محمد محمدی',
      articleAuthorImage: 'http://localhost:5173/src/assets/images/users/user1.png',
      isTopArticle: true,
      isSlideArticle: false,
    },
    {
      id: 2,
      articleTitle: 'طراحی کنترل کننده زیر دریایی نظامی در دانشگاه صنعتی شریف تهران',
      articleText:
        'کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین ۱۰ زیر دریایی برتر جهان قرار گرفت.',
      articleDate: '۲۸ تیر ۱۴۰۰',
      articleCategory: 'تکنولوژی',
      articleReadTime: '۷ دقیقه مطالعه',
      articleImage: 'http://localhost:5173/src/assets/images/articles/top-article-2.png',
      articleAuthorName: 'احمد احمدی',
      articleAuthorImage: 'http://localhost:5173/src/assets/images/users/user2.png',
      isTopArticle: true,
      isSlideArticle: false,
    },
    {
      id: 3,
      articleTitle: 'طراحی کنترل کننده زیر دریایی نظامی در دانشگاه صنعتی شریف تهران',
      articleText:
        'کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین ۱۰ زیر دریایی برتر جهان قرار گرفت.',
      articleDate: '۲۸ تیر ۱۴۰۰',
      articleCategory: 'تکنولوژی',
      articleReadTime: '۷ دقیقه مطالعه',
      articleImage: 'http://localhost:5173/src/assets/images/articles/top-article-3.png',
      articleAuthorName: 'احمد احمدی',
      articleAuthorImage: 'http://localhost:5173/src/assets/images/users/user3.png',
      isTopArticle: true,
      isSlideArticle: false,
    },
    {
      id: 4,
      articleTitle:
        'اسنپدراگون ۸ نسل یک پلاس احتمالا ۲۰ درصد سریع تر از نسل قبلی این تراشه خواهد بود',
      articleText:
        'کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیر دریایی برتر جهان قرار گرفت.',
      articleDate: '۲۸ تیر ۱۴۰۰',
      articleCategory: 'تکنولوژی',
      articleReadTime: '۹ دقیقه مطالعه',
      articleImage: 'http://localhost:5173/src/assets/images/articles/article-1.png',
      articleAuthorName: 'احمد احمدی',
      articleAuthorImage: 'http://localhost:5173/src/assets/images/users/user4.png',
      isTopArticle: false,
      isSlideArticle: false,
    },
    {
      id: 5,
      articleTitle:
        'کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیر دریایی برتر جهان قرار گرفت',
      articleText:
        'کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیر دریایی برتر جهان قرار گرفت',
      articleDate: '۲۸ تیر ۱۴۰۰',
      articleCategory: 'تکنولوژی',
      articleReadTime: '۹ دقیقه مطالعه',
      articleImage: 'http://localhost:5173/src/assets/images/articles/article-2.png',
      articleAuthorName: 'احمد احمدی',
      articleAuthorImage: 'http://localhost:5173/src/assets/images/users/user5.png',
      isTopArticle: false,
      isSlideArticle: false,
    },
    {
      id: 6,
      articleTitle:
        'گزارش مالی جدید ال جی از رکورد بی سابقه خرید و فروش این شرکت در سه ماه نخست سال ۲۰۲۲ خبر می دهد',
      articleText:
        'کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیر دریایی برتر جهان قرار گرفت',
      articleDate: '۲۸ تیر ۱۴۰۰',
      articleCategory: 'تکنولوژی',
      articleReadTime: '۹ دقیقه مطالعه',
      articleImage: 'http://localhost:5173/src/assets/images/articles/article-3.png',
      articleAuthorName: 'احمد احمدی',
      articleAuthorImage: 'http://localhost:5173/src/assets/images/users/user6.png',
      isTopArticle: false,
      isSlideArticle: false,
    },
    {
      id: 7,
      articleTitle:
        'کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیر دریایی برتر جهان قرار گرفت',
      articleText:
        'کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیر دریایی برتر جهان قرار گرفت',
      articleDate: '۲۸ تیر ۱۴۰۰',
      articleCategory: 'تکنولوژی',
      articleReadTime: '۹ دقیقه مطالعه',
      articleImage: 'http://localhost:5173/src/assets/images/articles/slide-article-1.jpg',
      articleAuthorName: 'احمد احمدی',
      articleAuthorImage: 'http://localhost:5173/src/assets/images/users/Ellipse3.png',
      isTopArticle: false,
      isSlideArticle: true,
    },
    {
      id: 8,
      articleTitle:
        'کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیر دریایی برتر جهان قرار گرفت',
      articleText:
        'کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیر دریایی برتر جهان قرار گرفت',
      articleDate: '۲۸ تیر ۱۴۰۰',
      articleCategory: 'تکنولوژی',
      articleReadTime: '۹ دقیقه مطالعه',
      articleImage: 'http://localhost:5173/src/assets/images/articles/slide-article-2.jpg',
      articleAuthorName: 'احمد احمدی',
      articleAuthorImage: 'http://localhost:5173/src/assets/images/users/profile-picture.jpg',
      isTopArticle: false,
      isSlideArticle: true,
    },
    {
      id: 9,
      articleTitle:
        'کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیر دریایی برتر جهان قرار گرفت',
      articleText:
        'کنترل کننده زیر دریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیر دریایی برتر جهان قرار گرفت',
      articleDate: '۲۸ تیر ۱۴۰۰',
      articleCategory: 'تکنولوژی',
      articleReadTime: '۹ دقیقه مطالعه',
      articleImage: 'http://localhost:5173/src/assets/images/articles/slide-article-3.jpg',
      articleAuthorName: 'احمد احمدی',
      articleAuthorImage: 'http://localhost:5173/src/assets/images/users/profile-picture.jpg',
      isTopArticle: false,
      isSlideArticle: true,
    },
  ])

  return { articles }
})
