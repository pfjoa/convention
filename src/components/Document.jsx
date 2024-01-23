import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";
// import P from "./Pages/Page.jsx";
import indh from "../assets/indh.png";
import font from "../components/Font/Cairo-VariableFont_slnt,wght.ttf";
import fontBold from "../components/Font/Cairo-Bold.ttf";

Font.register({
  family: "Cairo",
  fonts: [
    {
      src: font,
    },
    {
      src: fontBold,
      fontWeight: 700,
    },
  ],
});

const paragraphsArray = [
  {
    paragraph: `تنفيذا للتوجيهات الملكية السامية الواردة  في خطاب 81 ماي 5002 بشأن الاعلان عن انطلاق المبادرة الوطنية للتنمية البشرية.`,
  },
  // {
  //   paragraph:
  //     "تنفيذا للتوجيهات الملكية السامية الواردة في خطاب 92 يوليوز 8102 بمناسبة عيد العرش المجيد",
  // },
  // {
  //   paragraph:
  //     "بناء على مقتضيات الظهير الشريف رقم 1.15.83 الصادر في 20 من رمضان 1436 (7 يوليوز 2015) بتنفيذ القانون التنظيمي رقم 111.14 المتعلق بتنظيم الجهات.",
  // },
  // {
  //   paragraph:
  //     "بناء على مقتضيات الظهير الشريف رقم 168. 75. 1 الصادر في 25 صفر 1397 الموافق 15 فبراير 1977 بشأن اختصاصات العمال كما تم تغييره وتتميمه بالظهير الشريف بمثابة قانون رقم 1.93.293 بتاريخ 19 ربيع الثاني 1414 الموافق 6 اكتوبر 1993.",
  // },
  // {
  //   paragraph:
  //     "وبناء على مقتضيات الظهير الشريف رقم 1.15.84 الصادر في 20 من رمضان 1436 (7 يوليوز 2015) بتنفيذ القانون التنظيمي رقم 112.14 المتعلق بالعمالات والأقاليم.",
  // },
  // {
  //   paragraph:
  //     "بناء على مقتضيات الظهير الشريف رقم 1.15.85 الصادر في 20 من رمضان 1436 (7 يوليوز 2015) بتنفيذ القانون التنظيمي رقم 113.14 المتعلق بتنظيم الجماعات.",
  // },
  // {
  //   paragraph:
  //     "بناء على مرسوم رقم 2.12.349 الصادر في  8جمادى الأولى (20 مارس 2013) المتعلق بالصفقات العمومية؛",
  // },
  // {
  //   paragraph:
  //     "بناء على المرسوم رقم 2.18.831 الصادر في 12 من ربيع الثاني 1440 (20 دجنبر 2018) المتعلق بتغيير وتتميم المرسوم رقم 2.05.1017 في 12 من جمادى الأخيرة 1426 (19 يوليوز 2005) المتعلق بمساطر تنفيذ النفقات المرصودة في إطار صندوق دعم المبادرة الوطنية للتنمية البشرية؛",
  // },
  // {
  //   paragraph:
  //     'بناء على قرار الوزير الأول رقم 3-108-05 بتاريخ 30 نونبر 2005 الذي يخول للسادة الولاة والعمال صفة الآمرين بالصرف المساعدين للنفقات المحسوبة على الحساب الخصوصي رقم 06.04.1.3 المسمى "صندوق دعم المبادرة الوطنية للتنمية البشرية"؛',
  // },
  // {
  //   paragraph:
  //     "بناء على أرضية العمل الخاصة بتنفيذ برنامج المبادرة الوطنية للتنمية البشرية برسم 2019- 2023",
  // },
  // {
  //   paragraph:
  //     "تنفيذا للتعليمات الوزارية المضمنة في البرقية عدد 1107 بتاريخ 18 يناير 2019 بمثابة ورقة توجيهية لمخطط المبادرة الوطنية للتنمية البشرية 2019-2023  بناء على مقتضيات اتفاقية الشراكة عدد/ P3 33 2023/INDH/المتعلقة بدعم المشاريع.",
  // },
  // {
  //   paragraph:
  //     "بناء على تقارير الخاصة بنتائج دراسة سلاسل الإنتاج بعمالة وجدة أنجاد؛",
  // },
  // { paragraph: "بناء على نتائج دراسة الجدوى الصادرة عن منصة الشباب؛" },
  // {
  //   paragraph: `الخاصة بتمويل مشاريع البرنامج الثالث؛ ${"/P3 33 2023/INDH/"} بناء على مقتضيات اتفاقية الشراكة عدد`,
  // },
  // { paragraph: "بناء على محضر اجتماعي اللجنة الاقليمية للتنمية الاقتصادية بتاريخ 15-16 يونيو 2023 و 21 سبتمبر 2023 المنعقدين على التوالي بمقر الولاية و منصة الشباب وجد" },
  // { paragraph: "- انكاد لإبداء الرأي وإجراء مقابلات مع حاملي المشاريع؛" },
  // { paragraph: "بناء على اجتماع اللجنة الاقليمية للتنمية البشرية المنعقد بتاريخ 18 أكتوبر2023." }
];

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    display: "flex",
    fontFamily: "Cairo",
  },
  img: {
    width: 400,
    height: 50,
    textAlign: "center",
    alignSelf: "center",
  },
  textbold: {
    fontWeight: 700,
    fontSize: 12,
  },
  textmiddle: {
    fontSize: 16,
    textAlign: "center",
  },
  box: {
    border: "1px solid black",
  },
});
const PDFFile = () => {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("ar", { month: "short" });
  const month = formatter.format(new Date());
  const year = date.getFullYear();

  const reverseArabicText = (text) => {
    return text.split("").join("");
  };
  return (
    <Document size="A4">
      <Page style={styles.body}>
        <Image src={indh} style={styles.img} />
        <Text style={{ ...styles.textbold, textAlign: "right" }}>
          المملكة المغربية
        </Text>
        <Text style={{ ...styles.textbold, textAlign: "right" }}>
          وزارة الداخلية
        </Text>
        <Text style={{ ...styles.textbold, textAlign: "right" }}>
          ولاية جهة الشرق
        </Text>
        <Text style={{ ...styles.textbold, textAlign: "right" }}>
          عمالة وجدة أنجاد
        </Text>
        <Text style={{ ...styles.textbold, textAlign: "right" }}>
          الكتابة العامة
        </Text>
        <Text style={{ ...styles.textbold, textAlign: "right" }}>
          قسم العمل االجتماعي
        </Text>
        <Text style={{ ...styles.textmiddle, marginTop: 50 }}>
          برنامج تحسين الدخل والإدماج الاقتصادي للشباب
        </Text>
        <Text style={{ ...styles.textmiddle, fontWeight: 700 }}>
          2023/INDH/33/P3 اتفاقية رقم
        </Text>
        <View style={{ ...styles.box, padding: 1, marginTop: "25%" }}>
          <View
            style={{
              ...styles.box,
              textAlign: "center",
              padding: 2,
              backgroundColor: "#e5e5e5",
            }}
          >
            <Text>اتفاقية تتعلق بإنجاز مشروع:</Text>
            <Text>"{"انتاج مواد التجميل"}"</Text>
            <Text>التعاونية {" AICHA LITANMIA لفائدة"}</Text>
          </View>
        </View>
        <Text
          style={{
            position: "absolute",
            fontSize: 12,
            bottom: 50,
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          {year} {month}
        </Text>
        <Text
          style={{
            position: "absolute",
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: "center",
            color: "grey",
          }}
          render={({ pageNumber }) => `${pageNumber}`}
          fixed
        />
      </Page>
      <Page style={styles.body}>
        <Text
          style={{
            ...styles.textbold,
            textAlign: "center",
            fontSize: 14,
            color: "#808000",
          }}
        >
          تمهيـــــد
        </Text>
        {paragraphsArray.map((paragraph, index) => {
          return (
            <Text key={index} style={{ fontSize: 12, textAlign:"right" }}>{paragraph.paragraph}</Text>
          );
        })}
        {/* <Text style={{ textAlign: "right", fontSize: 10 }}>
          تنفيذا للتوجيهات الملكية السامية الواردة  في خطاب 81 ماي 5002 بشأن
          الاعلان عن انطلاق المبادرة الوطنية للتنمية البشرية.
        </Text> */}
      </Page>
    </Document>
  );
};

export default PDFFile;
