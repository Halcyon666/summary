"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[8229],{9841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(5893),a=n(1151);const i={title:"Java Upload Files",sidebar_label:"Java Upload Files",sidebar_position:3},s=void 0,o={id:"Java/JavaBase/file upload",title:"Java Upload Files",description:"Controler interface",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/01-Java/01-JavaBase/file upload.mdx",sourceDirName:"01-Java/01-JavaBase",slug:"/Java/JavaBase/file upload",permalink:"/en/Java/JavaBase/file upload",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Java Upload Files",sidebar_label:"Java Upload Files",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"APT Usage",permalink:"/en/Java/JavaBase/annotation processor"},next:{title:"Sping Core",permalink:"/en/Java/Spring/Spring-Core"}},l={},p=[{value:"Controler interface",id:"controler-interface",level:2},{value:"Upload files using Resttemplate",id:"upload-files-using-resttemplate",level:2},{value:"Upload files using HttpClient",id:"upload-files-using-httpclient",level:2}];function u(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"controler-interface",children:"Controler interface"}),"\n",(0,r.jsx)(t.p,{children:"Define a controller class"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'package whalefall.filedownloadorup;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.multipart.MultipartFile;\n\n/**\n * @author: WhaleFall541\n * @date: 2021/11/25 22:29\n */\n@RestController\n@Slf4j\npublic class Test4HtmlController {\n\n    @PostMapping("upload1")\n    public String upload1(@RequestParam("file") MultipartFile file, @RequestParam("test") String test) {\n        log.info("upload1 {} test {}", file.getOriginalFilename(), test);\n        return "OK";\n    }\n\n}\n\n'})}),"\n",(0,r.jsx)(t.h2,{id:"upload-files-using-resttemplate",children:"Upload files using Resttemplate"}),"\n",(0,r.jsx)(t.p,{children:"Integrate Resttemplate without extra package when using Spring-Boot"}),"\n",(0,r.jsx)(t.p,{children:"Use RestTemplate FileSystemResource Unit test code"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'package whalefall.filedownloadorup;\n\n\nimport org.junit.jupiter.api.Assertions;\nimport org.junit.jupiter.api.Test;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.core.io.FileSystemResource;\nimport org.springframework.http.*;\nimport org.springframework.util.LinkedMultiValueMap;\nimport org.springframework.util.MultiValueMap;\nimport org.springframework.web.client.RestTemplate;\n\nimport java.io.File;\n\nimport static whalefall.filedownloadorup.TestHttpClientUpload1.FILE_PATH;\nimport static whalefall.filedownloadorup.TestHttpClientUpload1.UPLOAD_URL;\n\n/**\n * @author Halcyon\n * @since 1.0.0\n */\npublic class TestRestTemplateUpload {\n    private static final Logger logger = LoggerFactory.getLogger(TestHttpClientUpload1.class);\n    @Test\n    public void testResttemplateUpload() {\n        File file = new File(FILE_PATH);\n\n        // create RestTemplate Instance\n        RestTemplate restTemplate = new RestTemplate();\n\n        // construct requestBody\n        MultiValueMap<String, Object> requestBody = new LinkedMultiValueMap<>();\n        // ByteArrayResource It is also possible but you need to override the getFilename method, which is suitable for byte files.\n        requestBody.add("file", new FileSystemResource(file)); // \u6dfb\u52a0\u6587\u4ef6\n        requestBody.add("test", "testResttemplateUpload test");\n\n        // set the header\n        HttpHeaders headers = new HttpHeaders();\n        headers.setContentType(MediaType.MULTIPART_FORM_DATA);\n\n        // create HttpEntity\n        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);\n\n        // send\n        ResponseEntity<String> response = restTemplate.exchange(UPLOAD_URL, HttpMethod.POST, requestEntity, String.class);\n\n        // parse the response\n        int statusCode = response.getStatusCodeValue();\n        String responseBody = response.getBody();\n\n        Assertions.assertEquals(200, statusCode);\n        Assertions.assertEquals("OK", responseBody);\n    }\n}\n\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Use RestTemplate FileSystemResource Unit test code"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'package whalefall.filedownloadorup;\n\n\nimport org.junit.jupiter.api.Assertions;\nimport org.junit.jupiter.api.Test;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.core.io.ByteArrayResource;\nimport org.springframework.http.*;\nimport org.springframework.util.LinkedMultiValueMap;\nimport org.springframework.util.MultiValueMap;\nimport org.springframework.web.client.RestTemplate;\n\nimport java.io.ByteArrayOutputStream;\nimport java.io.FileInputStream;\nimport java.io.IOException;\nimport java.util.Objects;\n\nimport static whalefall.filedownloadorup.TestHttpClientUpload1.FILE_PATH;\nimport static whalefall.filedownloadorup.TestHttpClientUpload1.UPLOAD_URL;\n\n/**\n * @author Halcyon\n * @since 1.0.0\n */\npublic class TestRestTemplateUpload2 {\n    private static final Logger logger = LoggerFactory.getLogger(TestHttpClientUpload1.class);\n\n    public static byte[] readFileAsByteArray(String filePath) {\n        try (FileInputStream fis = new FileInputStream(filePath);\n             ByteArrayOutputStream bos = new ByteArrayOutputStream()) {\n\n            byte[] buffer = new byte[1024];\n            int bytesRead;\n            while ((bytesRead = fis.read(buffer)) != -1) {\n                bos.write(buffer, 0, bytesRead);\n            }\n            return bos.toByteArray();\n        } catch (IOException e) {\n            logger.error(e.getMessage(), e);\n        }\n        return null;\n    }\n\n    @Test\n    public void testResttemplateUpload() throws IOException {\n\n        // \u521b\u5efaRestTemplate\u5b9e\u4f8b\n        RestTemplate restTemplate = new RestTemplate();\n\n        // \u6784\u5efa\u8bf7\u6c42\u4f53\n        MultiValueMap<String, Object> requestBody = new LinkedMultiValueMap<>();\n        requestBody.add("file", new ByteArrayResource(Objects.requireNonNull(readFileAsByteArray(FILE_PATH))) {\n            @Override\n            public String getFilename() {\n                return "test.xlsx";\n            }\n        });\n        requestBody.add("test", "testResttemplateUpload2 test");\n\n        // \u8bbe\u7f6e\u8bf7\u6c42\u5934\n        HttpHeaders headers = new HttpHeaders();\n        headers.setContentType(MediaType.MULTIPART_FORM_DATA);\n\n        // \u521b\u5efaHttpEntity\uff0c\u5c06\u8bf7\u6c42\u4f53\u548c\u8bf7\u6c42\u5934\u5c01\u88c5\u8fdb\u53bb\n        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);\n\n        // \u53d1\u9001POST\u8bf7\u6c42\n        ResponseEntity<String> response = null;\n        try {\n            response = restTemplate.exchange(UPLOAD_URL, HttpMethod.POST, requestEntity, String.class);\n            // \u83b7\u53d6\u670d\u52a1\u5668\u7684\u54cd\u5e94\u72b6\u6001\u7801\u548c\u54cd\u5e94\u4f53\n            int statusCode = response.getStatusCodeValue();\n            String responseBody = response.getBody();\n\n            Assertions.assertEquals(200, statusCode);\n            Assertions.assertEquals("OK", responseBody);\n        } catch (Exception e) {\n            logger.error(e.getMessage(), e);\n        }\n\n    }\n}\n\n'})})]}),"\n",(0,r.jsx)(t.h2,{id:"upload-files-using-httpclient",children:"Upload files using HttpClient"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Packages"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:"    implementation 'org.apache.httpcomponents:httpclient:4.5.13'\n    implementation 'org.apache.httpcomponents:httpmime:4.5.13'\n"})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)("summary",{children:"Test Code"})," with HttpClient Unit"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'package whalefall.filedownloadorup;\n\nimport org.apache.http.HttpEntity;\nimport org.apache.http.client.methods.CloseableHttpResponse;\nimport org.apache.http.client.methods.HttpPost;\nimport org.apache.http.entity.ContentType;\nimport org.apache.http.entity.mime.MultipartEntityBuilder;\nimport org.apache.http.impl.client.CloseableHttpClient;\nimport org.apache.http.impl.client.HttpClients;\nimport org.junit.jupiter.api.Assertions;\nimport org.junit.jupiter.api.Test;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\nimport java.io.File;\nimport java.io.IOException;\nimport java.util.Objects;\n\n/**\n * @author Halcyon\n * @since 1.0.0\n */\npublic class TestHttpClientUpload1 {\n    public static final String FILE_PATH = Objects.requireNonNull(TestHttpClientUpload1.class.getResource("/exceltemplet/priceListTemplate.xlsx")).getPath();\n    public static final String UPLOAD_URL = "http://localhost:8080/upload1";\n    private static final Logger logger = LoggerFactory.getLogger(TestHttpClientUpload1.class);\n\n    @Test\n    public void testHttpClientUpload() {\n\n        File file = new File(FILE_PATH);\n\n        CloseableHttpClient httpClient = HttpClients.createDefault();\n\n        HttpPost httpPost = new HttpPost(UPLOAD_URL);\n\n        MultipartEntityBuilder builder = MultipartEntityBuilder.create();\n        builder.addBinaryBody("file", file, ContentType.APPLICATION_OCTET_STREAM, file.getName());\n\n        builder.addTextBody("test", "testHttpClientUpload test");\n\n        HttpEntity entity = builder.build();\n        httpPost.setEntity(entity);\n        int statusCode = 500;\n        try (CloseableHttpResponse response = httpClient.execute(httpPost)) {\n           \n            statusCode = response.getStatusLine().getStatusCode();\n\n        } catch (IOException e) {\n            logger.error(e.getMessage(), e);\n        }\n        Assertions.assertEquals(200, statusCode);\n    }\n\n}\n'})})]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(7294);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);