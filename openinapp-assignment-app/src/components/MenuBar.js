import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <svg id="logo" width="111" height="42" viewBox="0 0 111 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z" fill="#605BFF" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z" fill="#605BFF" />
        <path d="M68.928 20.288C69.904 20.56 70.656 21.048 71.184 21.752C71.728 22.456 72 23.336 72 24.392C72 25.848 71.496 26.984 70.488 27.8C69.496 28.6 68.104 29 66.312 29H60.192C59.808 29 59.504 28.896 59.28 28.688C59.072 28.464 58.968 28.168 58.968 27.8V13.28C58.968 12.912 59.072 12.624 59.28 12.416C59.504 12.192 59.808 12.08 60.192 12.08H66.048C67.792 12.08 69.152 12.472 70.128 13.256C71.12 14.024 71.616 15.104 71.616 16.496C71.616 17.392 71.376 18.168 70.896 18.824C70.432 19.48 69.776 19.968 68.928 20.288ZM61.392 19.4H65.664C68.032 19.4 69.216 18.504 69.216 16.712C69.216 15.816 68.92 15.152 68.328 14.72C67.752 14.288 66.864 14.072 65.664 14.072H61.392V19.4ZM66.048 27.008C67.28 27.008 68.184 26.784 68.76 26.336C69.336 25.888 69.624 25.192 69.624 24.248C69.624 23.288 69.328 22.576 68.736 22.112C68.16 21.632 67.264 21.392 66.048 21.392H61.392V27.008H66.048ZM79.8656 17C81.4176 17 82.5696 17.392 83.3216 18.176C84.0896 18.96 84.4736 20.152 84.4736 21.752V27.968C84.4736 28.336 84.3696 28.624 84.1616 28.832C83.9536 29.024 83.6656 29.12 83.2976 29.12C82.9456 29.12 82.6656 29.016 82.4576 28.808C82.2496 28.6 82.1456 28.32 82.1456 27.968V27.08C81.8416 27.752 81.3856 28.272 80.7776 28.64C80.1856 28.992 79.4896 29.168 78.6896 29.168C77.9216 29.168 77.2176 29.016 76.5776 28.712C75.9536 28.392 75.4576 27.96 75.0896 27.416C74.7216 26.872 74.5376 26.256 74.5376 25.568C74.5216 24.704 74.7376 24.032 75.1856 23.552C75.6336 23.056 76.3616 22.704 77.3696 22.496C78.3776 22.272 79.7776 22.16 81.5696 22.16H82.1216V21.464C82.1216 20.568 81.9376 19.92 81.5696 19.52C81.2016 19.12 80.6096 18.92 79.7936 18.92C79.2336 18.92 78.7056 18.992 78.2096 19.136C77.7136 19.28 77.1696 19.488 76.5776 19.76C76.1456 20 75.8416 20.12 75.6656 20.12C75.4256 20.12 75.2256 20.032 75.0656 19.856C74.9216 19.68 74.8496 19.456 74.8496 19.184C74.8496 18.944 74.9136 18.736 75.0416 18.56C75.1856 18.368 75.4096 18.184 75.7136 18.008C76.2736 17.704 76.9296 17.464 77.6816 17.288C78.4336 17.096 79.1616 17 79.8656 17ZM79.1216 27.368C80.0016 27.368 80.7216 27.072 81.2816 26.48C81.8416 25.872 82.1216 25.096 82.1216 24.152V23.528H81.6896C80.4416 23.528 79.4816 23.584 78.8096 23.696C78.1376 23.808 77.6576 24 77.3696 24.272C77.0816 24.528 76.9376 24.904 76.9376 25.4C76.9376 25.976 77.1456 26.448 77.5616 26.816C77.9776 27.184 78.4976 27.368 79.1216 27.368ZM91.8694 29.168C90.2374 29.168 88.9014 28.832 87.8614 28.16C87.5734 27.984 87.3654 27.8 87.2374 27.608C87.1254 27.416 87.0694 27.2 87.0694 26.96C87.0694 26.704 87.1414 26.488 87.2854 26.312C87.4294 26.136 87.6134 26.048 87.8374 26.048C88.0454 26.048 88.3734 26.176 88.8214 26.432C89.3014 26.688 89.7654 26.896 90.2134 27.056C90.6774 27.216 91.2534 27.296 91.9414 27.296C92.7094 27.296 93.3094 27.16 93.7414 26.888C94.1734 26.616 94.3894 26.232 94.3894 25.736C94.3894 25.416 94.3014 25.16 94.1254 24.968C93.9654 24.776 93.6774 24.608 93.2614 24.464C92.8454 24.304 92.2294 24.136 91.4134 23.96C90.0054 23.656 88.9894 23.248 88.3654 22.736C87.7574 22.208 87.4534 21.496 87.4534 20.6C87.4534 19.912 87.6534 19.296 88.0534 18.752C88.4534 18.192 89.0054 17.76 89.7094 17.456C90.4134 17.152 91.2134 17 92.1094 17C92.7494 17 93.3734 17.088 93.9814 17.264C94.5894 17.424 95.1254 17.664 95.5894 17.984C96.1174 18.336 96.3814 18.744 96.3814 19.208C96.3814 19.464 96.3014 19.68 96.1414 19.856C95.9974 20.032 95.8214 20.12 95.6134 20.12C95.4694 20.12 95.3254 20.088 95.1814 20.024C95.0374 19.96 94.8454 19.856 94.6054 19.712C94.1734 19.456 93.7654 19.256 93.3814 19.112C93.0134 18.968 92.5494 18.896 91.9894 18.896C91.3174 18.896 90.7734 19.04 90.3574 19.328C89.9574 19.616 89.7574 20.008 89.7574 20.504C89.7574 20.952 89.9414 21.304 90.3094 21.56C90.6934 21.8 91.4054 22.032 92.4454 22.256C93.5174 22.48 94.3574 22.736 94.9654 23.024C95.5734 23.312 96.0054 23.672 96.2614 24.104C96.5334 24.52 96.6694 25.056 96.6694 25.712C96.6694 26.752 96.2294 27.592 95.3494 28.232C94.4854 28.856 93.3254 29.168 91.8694 29.168ZM108.536 26.048C108.76 26.048 108.944 26.136 109.088 26.312C109.232 26.488 109.304 26.712 109.304 26.984C109.304 27.448 109.016 27.84 108.44 28.16C107.88 28.48 107.264 28.728 106.592 28.904C105.936 29.08 105.304 29.168 104.696 29.168C102.84 29.168 101.376 28.632 100.304 27.56C99.2315 26.472 98.6955 24.992 98.6955 23.12C98.6955 21.92 98.9275 20.856 99.3915 19.928C99.8715 19 100.536 18.28 101.384 17.768C102.248 17.256 103.224 17 104.312 17C105.88 17 107.12 17.504 108.032 18.512C108.944 19.52 109.4 20.88 109.4 22.592C109.4 23.232 109.112 23.552 108.536 23.552H101.12C101.28 26.032 102.472 27.272 104.696 27.272C105.288 27.272 105.8 27.192 106.232 27.032C106.664 26.872 107.12 26.664 107.6 26.408C107.648 26.376 107.776 26.312 107.984 26.216C108.208 26.104 108.392 26.048 108.536 26.048ZM104.36 18.776C103.432 18.776 102.688 19.072 102.128 19.664C101.568 20.256 101.232 21.088 101.12 22.16H107.312C107.264 21.072 106.984 20.24 106.472 19.664C105.976 19.072 105.272 18.776 104.36 18.776Z" fill="#030229" />
      </svg>

      <div className="menu-item">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.54 0H5.92C7.33 0 8.46 1.15 8.46 2.561V5.97C8.46 7.39 7.33 8.53 5.92 8.53H2.54C1.14 8.53 0 7.39 0 5.97V2.561C0 1.15 1.14 0 2.54 0ZM2.54 11.4697H5.92C7.33 11.4697 8.46 12.6107 8.46 14.0307V17.4397C8.46 18.8497 7.33 19.9997 5.92 19.9997H2.54C1.14 19.9997 0 18.8497 0 17.4397V14.0307C0 12.6107 1.14 11.4697 2.54 11.4697ZM17.4601 0H14.0801C12.6701 0 11.5401 1.15 11.5401 2.561V5.97C11.5401 7.39 12.6701 8.53 14.0801 8.53H17.4601C18.8601 8.53 20.0001 7.39 20.0001 5.97V2.561C20.0001 1.15 18.8601 0 17.4601 0ZM14.0801 11.4697H17.4601C18.8601 11.4697 20.0001 12.6107 20.0001 14.0307V17.4397C20.0001 18.8497 18.8601 19.9997 17.4601 19.9997H14.0801C12.6701 19.9997 11.5401 18.8497 11.5401 17.4397V14.0307C11.5401 12.6107 12.6701 11.4697 14.0801 11.4697Z" fill="#9A9AA9" />
        </svg>
        Dashboard
      </div>
      <div className="menu-item">
        <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33 0H14.669C18.07 0 19.99 2.1243 20 5.86962V16.1552C20 19.8994 18.07 22.0248 14.669 22.0248H5.33C1.929 22.0248 0 19.8994 0 16.1552V5.86962C0 2.1243 1.929 0 5.33 0ZM10.049 17.4657C10.48 17.4657 10.839 17.1133 10.879 16.6398V5.41811C10.919 5.07672 10.77 4.73424 10.5 4.54813C10.219 4.36092 9.879 4.36092 9.61 4.54813C9.339 4.73424 9.19 5.07672 9.219 5.41811V16.6398C9.27 17.1133 9.629 17.4657 10.049 17.4657ZM14.65 17.4657C15.07 17.4657 15.429 17.1133 15.48 16.6398V13.0277C15.509 12.6742 15.36 12.3449 15.089 12.1577C14.82 11.9705 14.48 11.9705 14.2 12.1577C13.929 12.3449 13.78 12.6742 13.82 13.0277V16.6398C13.86 17.1133 14.219 17.4657 14.65 17.4657ZM6.21899 16.6398C6.17899 17.1133 5.81999 17.4657 5.38899 17.4657C4.95899 17.4657 4.59899 17.1133 4.55999 16.6398V9.03018C4.52999 8.6877 4.67899 8.34741 4.94999 8.1602C5.21899 7.97299 5.55999 7.97299 5.82999 8.1602C6.09899 8.34741 6.24999 8.6877 6.21899 9.03018V16.6398Z" fill="#605BFF" />
        </svg>

        Upload
      </div>
      <div className="menu-item">
        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7872 7.57464C21.6518 7.71948 21.4681 7.80226 21.2747 7.80226C20.559 7.80226 19.9787 8.42304 19.9787 9.17832C19.9787 9.93878 20.5522 10.5565 21.2611 10.5647C21.6605 10.5689 22 10.8668 22 11.2942V13.948C22 16.1818 20.3075 17.9934 18.2186 17.9934H15.0658C14.7398 17.9934 14.4758 17.711 14.4758 17.3623V15.1275C14.4758 14.6929 14.1567 14.3515 13.7505 14.3515C13.354 14.3515 13.0251 14.6929 13.0251 15.1275V17.3623C13.0251 17.711 12.7611 17.9934 12.4362 17.9934H5.78143C3.70213 17.9934 2 16.1828 2 13.948V11.2942C2 10.8668 2.33946 10.5689 2.73888 10.5647C3.44874 10.5565 4.02128 9.93878 4.02128 9.17832C4.02128 8.44373 3.46035 7.88503 2.72534 7.88503C2.53191 7.88503 2.34816 7.80226 2.21277 7.65741C2.07737 7.51256 2 7.31598 2 7.10905V4.42934C2 2.19866 3.706 0.373562 5.7911 0.373562H12.4362C12.7611 0.373562 13.0251 0.656018 13.0251 1.00469V3.65336C13.0251 4.07756 13.354 4.42934 13.7505 4.42934C14.1567 4.42934 14.4758 4.07756 14.4758 3.65336V1.00469C14.4758 0.656018 14.7398 0.373562 15.0658 0.373562H18.2186C20.3075 0.373562 22 2.18418 22 4.41899V7.02628C22 7.2332 21.9226 7.42979 21.7872 7.57464ZM13.7505 12.3443C14.1567 12.3443 14.4758 11.9925 14.4758 11.5683V7.42979C14.4758 7.00559 14.1567 6.65381 13.7505 6.65381C13.354 6.65381 13.0251 7.00559 13.0251 7.42979V11.5683C13.0251 11.9925 13.354 12.3443 13.7505 12.3443Z" fill="#030229" />
          </g>
        </svg>

        Invoice
      </div>
      <div className="menu-item">
        <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81 2.47565H16.191C19.28 2.47565 21 4.43586 21 7.79464V19.1705C21 22.5843 19.28 24.5005 16.191 24.5005H7.81C4.77 24.5005 3 22.5843 3 19.1705V7.79464C3 4.43586 4.77 2.47565 7.81 2.47565ZM8.07999 7.60743V7.59642H11.069C11.5 7.59642 11.85 7.98185 11.85 8.45429C11.85 8.93993 11.5 9.32537 11.069 9.32537H8.07999C7.64899 9.32537 7.29999 8.93994 7.29999 8.4664C7.29999 7.99287 7.64899 7.60743 8.07999 7.60743ZM8.07999 14.303H15.92C16.35 14.303 16.7 13.9176 16.7 13.444C16.7 12.9705 16.35 12.5839 15.92 12.5839H8.07999C7.64899 12.5839 7.29999 12.9705 7.29999 13.444C7.29999 13.9176 7.64899 14.303 8.07999 14.303ZM8.07999 19.3357H15.92C16.319 19.2916 16.62 18.9161 16.62 18.4767C16.62 18.0252 16.319 17.6508 15.92 17.6067H8.07999C7.77999 17.5737 7.48999 17.7278 7.32999 18.0142C7.16999 18.2895 7.16999 18.6529 7.32999 18.9392C7.48999 19.2145 7.77999 19.3797 8.07999 19.3357Z" fill="#030229" />
          </g>
        </svg>

        Schedule
      </div>
      <div className="menu-item">
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4109 3.75186L16.4119 4.57738C19.1665 4.81513 20.9862 6.88222 20.9891 10.0522L21 19.331C21.0039 22.7872 19.0322 24.9137 15.8718 24.9192L8.15188 24.9302C5.01119 24.9346 3.01482 22.7575 3.01087 19.2914L3.00001 10.1216C2.99606 6.93065 4.75153 4.86906 7.50617 4.59059L7.50518 3.76507C7.5042 3.28076 7.83001 2.91644 8.26444 2.91644C8.69886 2.91533 9.02468 3.27856 9.02567 3.76287L9.02666 4.53335L14.8914 4.52454L14.8904 3.75406C14.8894 3.26976 15.2152 2.90653 15.6497 2.90543C16.0742 2.90433 16.4099 3.26756 16.4109 3.75186ZM4.52146 10.4617L19.4696 10.4396V10.0544C19.4272 7.68792 18.349 6.44634 16.4138 6.26143L16.4148 7.10896C16.4148 7.58226 16.0801 7.95759 15.6556 7.95759C15.2211 7.95869 14.8943 7.58446 14.8943 7.11116L14.8933 6.2196L9.02862 6.22841L9.0296 7.11887C9.0296 7.59326 8.70477 7.9675 8.27035 7.9675C7.83592 7.9686 7.50912 7.59547 7.50912 7.12107L7.50813 6.27354C5.58284 6.48597 4.51751 7.73195 4.52048 10.1193L4.52146 10.4617ZM15.2399 15.4643V15.4764C15.2498 15.9827 15.625 16.3669 16.0801 16.3559C16.5244 16.3438 16.8789 15.9244 16.869 15.4181C16.8483 14.9338 16.4918 14.5386 16.0485 14.5397C15.5943 14.5507 15.2389 14.958 15.2399 15.4643ZM16.0554 20.4064C15.6013 20.3954 15.235 19.9782 15.234 19.4719C15.2241 18.9656 15.5884 18.5462 16.0426 18.5341H16.0525C16.5165 18.5341 16.8927 18.9513 16.8927 19.4686C16.8937 19.9859 16.5185 20.4053 16.0554 20.4064ZM11.1721 15.4819C11.1919 15.9882 11.568 16.3834 12.0222 16.3614C12.4665 16.3382 12.821 15.92 12.8012 15.4137C12.7903 14.9184 12.425 14.5331 11.9807 14.5342C11.5266 14.5562 11.1711 14.9756 11.1721 15.4819ZM12.0261 20.3569C11.572 20.3789 11.1968 19.9837 11.176 19.4774C11.176 18.9711 11.5305 18.5528 11.9847 18.5297C12.429 18.5286 12.7953 18.9139 12.8051 19.4081C12.8259 19.9155 12.4704 20.3338 12.0261 20.3569ZM7.1043 15.5204C7.12405 16.0268 7.50022 16.423 7.95439 16.3999C8.39869 16.3779 8.75314 15.9585 8.73241 15.4522C8.72253 14.9569 8.35722 14.5716 7.91194 14.5727C7.45777 14.5948 7.10332 15.0141 7.1043 15.5204ZM7.95836 20.3624C7.50419 20.3855 7.12901 19.9892 7.10827 19.4829C7.10728 18.9766 7.46272 18.5572 7.91689 18.5352C8.36119 18.5341 8.72749 18.9194 8.73736 19.4147C8.7581 19.921 8.40365 20.3404 7.95836 20.3624Z" fill="#030229" />
          </g>
        </svg>

        Calendar
      </div>
      <div className="menu-item">
        <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 7.81964C15.7071 9.20272 16.039 10.0179 16.7695 10.9574C17.3231 11.6495 17.5 12.5379 17.5 13.5017C17.5 14.4644 17.2128 15.3784 16.6373 16.1204C15.884 17.0099 14.8215 17.5778 13.7372 17.6765C12.1659 17.824 10.5937 17.9482 9.0005 17.9482C7.40634 17.9482 5.83505 17.8739 4.26375 17.6765C3.17846 17.5778 2.11602 17.0099 1.36367 16.1204C0.78822 15.3784 0.5 14.4644 0.5 13.5017C0.5 12.5379 0.677901 11.6495 1.23049 10.9574C1.98384 10.0179 2.29392 9.20272 2.29392 7.81964V7.35048C2.29392 5.49823 2.71333 4.28706 3.577 3.1014C4.86106 1.37227 6.91935 0.335236 8.95577 0.335236H9.04522C11.1254 0.335236 13.2502 1.42218 14.5125 3.22563C15.3314 4.38688 15.7071 5.54703 15.7071 7.35048V7.81964ZM6.07367 20.2246C6.07367 19.67 6.53582 19.416 6.96318 19.3073C7.46309 19.1909 10.5093 19.1909 11.0092 19.3073C11.4365 19.416 11.8987 19.67 11.8987 20.2246C11.8738 20.7525 11.5926 21.2206 11.204 21.5178C10.7001 21.9504 10.1087 22.2243 9.49057 22.323C9.14868 22.3718 8.81275 22.3729 8.48279 22.323C7.86361 22.2243 7.27227 21.9504 6.76937 21.5167C6.37978 21.2206 6.09852 20.7525 6.07367 20.2246Z" fill="#030229" />
        </svg>

        Notification
      </div>
      <div className="menu-item">
        <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4023 13.5175C18.76 13.7268 19.036 14.0572 19.2301 14.3875C19.6083 15.0703 19.5776 15.9072 19.2097 16.6451L18.4943 17.9666C18.1162 18.6714 17.411 19.1119 16.6855 19.1119C16.3278 19.1119 15.9292 19.0017 15.6022 18.7815C15.3365 18.5943 15.0299 18.5282 14.7029 18.5282C13.6911 18.5282 12.8429 19.4422 12.8122 20.5325C12.8122 21.7989 11.872 22.79 10.6968 22.79H9.30692C8.12145 22.79 7.18125 21.7989 7.18125 20.5325C7.16081 19.4422 6.31259 18.5282 5.30085 18.5282C4.96361 18.5282 4.65702 18.5943 4.40153 18.7815C4.0745 19.0017 3.66572 19.1119 3.31825 19.1119C2.58245 19.1119 1.87729 18.6714 1.49917 17.9666L0.79402 16.6451C0.415896 15.9293 0.395456 15.0703 0.773581 14.3875C0.937094 14.0572 1.24368 13.7268 1.59115 13.5175C1.87729 13.3634 2.06125 13.1101 2.23498 12.8128C2.74596 11.8657 2.43937 10.6213 1.57071 10.0596C0.55897 9.43194 0.231943 8.03336 0.814459 6.94313L1.49917 5.64367C2.09191 4.55344 3.35913 4.168 4.38109 4.80672C5.27019 5.33532 6.425 4.98292 6.9462 4.04687C7.10972 3.73852 7.20169 3.40815 7.18125 3.07777C7.16081 2.64829 7.27323 2.24083 7.4674 1.91046C7.84553 1.22769 8.53024 0.787192 9.27627 0.765167H10.7172C11.4735 0.765167 12.1582 1.22769 12.5363 1.91046C12.7203 2.24083 12.8429 2.64829 12.8122 3.07777C12.7918 3.40815 12.8838 3.73852 13.0473 4.04687C13.5685 4.98292 14.7233 5.33532 15.6226 4.80672C16.6344 4.168 17.9118 4.55344 18.4943 5.64367L19.179 6.94313C19.7718 8.03336 19.4447 9.43194 18.4228 10.0596C17.5541 10.6213 17.2475 11.8657 17.7687 12.8128C17.9322 13.1101 18.1162 13.3634 18.4023 13.5175ZM7.10971 11.7886C7.10971 13.5176 8.4076 14.8941 10.0121 14.8941C11.6165 14.8941 12.8838 13.5176 12.8838 11.7886C12.8838 10.0597 11.6165 8.67209 10.0121 8.67209C8.4076 8.67209 7.10971 10.0597 7.10971 11.7886Z" fill="#030229" />
        </svg>

        Settings
      </div>
    </div>
  );
};

export default MenuBar;