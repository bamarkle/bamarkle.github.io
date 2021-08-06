import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

message = str(input('What message would you like to leave on the league page? '))

PATH = "/media/b/Disk of Holding/Coding/Projects/Selenium/chromedriver"
driver = webdriver.Chrome(PATH)

driver.get("https://fantasy.nfl.com")

#Get to the sign in page
_x = driver.find_element_by_id('mobile-menu-button')
_x.click()
driver.implicitly_wait(5)
_x = driver.find_element_by_class_name('sign-in-state')
_x.click()

#Sign in
_x = driver.find_element_by_id('gigya-loginID-60062076330815260')
_x.send_keys('bamarkle@gmail.com')

_x = driver.find_element_by_id('gigya-password-85118380969228590')
_x.send_keys('Bignugget0', Keys.RETURN)

#Navigate to league page
_x = driver.find_element_by_id('my_league')
_x.click()

#Leave a message
_x = driver.find_element_by_id('messageBody')
_x.send_keys(message)

_x = driver.find_element_by_xpath("//a[normalize-space()='Post']")
_x.click()

