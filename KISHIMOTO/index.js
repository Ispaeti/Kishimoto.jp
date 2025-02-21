ublic class WebScraper {
    public static void main(String[] args) {
        try {  Document document = Jsoup.connect("http://www.kishimo.jp/index.html").get();
 String title = document.title();
            System.out.println("Title: " + title);
ocument.select("a[href]").forEach(link -> {
                System.out.println("Link: " + link.attr("abs:href") + " Text: " + link.text());
            });

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
String address = document.select("div.address").text();
System.out.println("Address: " + address);
String phoneNumber = document.select("div.phone").text();
System.out.println("Phone Number: " + phoneNumber);
株式会社岸本製作所