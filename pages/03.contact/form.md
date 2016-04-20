---
title: Contact
#recaptchacontact: true
form:
    name: gContactFormTest
    fields:
        - name: name
          label: Name
          placeholder: Enter your name
          autofocus: on
          autocomplete: on
          type: text
          validate:
            required: true

        - name: email
          label: Email
          placeholder: Enter your email address
          type: email
          validate:
            required: true
            rule: email
            message: Please check your email address.


        - name: check
          type: checkboxes
          label: What is your favorite ice cream flavor?
          options:
            chocolate: Chocolate
            monkey: Chunky Monkey
#          default:[chocolate: true, monkey: true]

        - name: dt
          type: date
          size: large
          label: Date
#          validate:
#            min: 01/01/2016
#          validate:
#            max: 12/30/2017

        - name: file uploads
          type: file
          multiple: false
          label: Upload an image
          # SEE /config/plugins/form.yaml
#          destination: '/pages/03.contact/fileUploads'
#          destination: '@self'
          accept: image/*

        - name: datetime
          type: datetime
          size: large
          label: Date Time

        - name: message
          label: Message
          size: long
          placeholder: Enter your message
          type: textarea
          validate:
            required: true

        - name: g-recaptcha-response
          label: Captcha
          type: captcha
          recatpcha_site_key: 6Lc-DxcTAAAAABD2gn3bLCB8L_21DxYgbJ_-3c6J
          recaptcha_not_validated: 'Captcha not valid!'
          validate:
            required: true
            message: Please complete the captcha challenge.

    buttons:
        - type: submit
          value: Submit
          classes: button

    process:
        - captcha:
              recatpcha_secret: 6Lc-DxcTAAAAAJLhP04rvPBw4L7eiDkHLA-P99h-
        - email:
            from: "{{ form.value.email }}"
            to: "{{ config.plugins.email.to }}"
#              - "{{ form.value.email }}"
            subject: "[Feedback] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - save:
            fileprefix: feedback-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
        - message: Thank you for your feedback!
        - display: thankyou
---

Fully gobbled, mustache calls sandwich shop minus narwhal. A rotten pond cares his coffee among values between sins. Party remembers their state of fathers above stills. Comment of finger forks forest within insect. My page's mouse bound her clandestine fingernail clearly.

Our paper created the sight indeed. Coldly, your handbook Echo of sky presses the might. But what saved your home's warm chain? His aquarium's sheet analyzed her Asheville nimbly. In the future, their flake caters my postcard. Not quite, why? Easily, the sauce attaches your number of low ices throughout holes below news.
